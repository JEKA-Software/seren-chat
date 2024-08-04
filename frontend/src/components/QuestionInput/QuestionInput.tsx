import { forwardRef, useImperativeHandle, useState } from 'react'
import { Stack, TextField } from '@fluentui/react'
import { SendRegular } from '@fluentui/react-icons'
import levenshtein from 'fast-levenshtein'

import Send from '../../assets/Send.svg'
import { commonQuestions } from '../../constants/commonQuestions'

import styles from './QuestionInput.module.css'

interface Props {
  onSend: (question: string, id?: string) => void
  handleCommonQuestion: (question: string, answer: string, sendQuestion: boolean) => void
  disabled: boolean
  placeholder?: string
  clearOnSend?: boolean
  conversationId?: string
}

const SIMILARITY_THRESHOLD = 0.65

export const QuestionInput = forwardRef(
  ({ onSend, handleCommonQuestion, disabled, placeholder, clearOnSend, conversationId }: Props, ref) => {
    const [question, setQuestion] = useState<string>('')

    useImperativeHandle(ref, () => ({
      sendQuestion: (text: string) => {
        setQuestion(text)
        sendQuestion(text)
      },
      mockSendQuestion: (text: string) => {
        setQuestion(text)
      }
    }))

    const findSimilarCommonQuestion = (input: string) => {
      const normalizedInput = input.toLowerCase().trim()
      let mostSimilarQuestion = null
      let highestSimilarity = 0

      for (const { question, answer } of commonQuestions) {
        const normalizedQuestion = question.toLowerCase().trim()
        const maxLength = Math.max(normalizedInput.length, normalizedQuestion.length)
        const similarity = 1 - levenshtein.get(normalizedInput, normalizedQuestion) / maxLength
        if (similarity > highestSimilarity && similarity >= SIMILARITY_THRESHOLD) {
          highestSimilarity = similarity
          mostSimilarQuestion = { question, answer }
        }
      }

      return mostSimilarQuestion
    }

    const sendQuestion = (text?: string) => {
      const questionToSend = text || question
      if (disabled || !questionToSend.trim()) {
        return
      }

      const similarQuestion = findSimilarCommonQuestion(questionToSend)

      if (similarQuestion) {
        onSend(questionToSend, conversationId)
        handleCommonQuestion(similarQuestion.question, similarQuestion.answer, false)
      } else if (conversationId) {
        onSend(questionToSend, conversationId)
      } else {
        onSend(questionToSend)
      }

      if (clearOnSend) {
        setQuestion('')
      }
    }

    const onEnterPress = (ev: React.KeyboardEvent<Element>) => {
      if (ev.key === 'Enter' && !ev.shiftKey && !(ev.nativeEvent?.isComposing === true)) {
        ev.preventDefault()
        sendQuestion()
      }
    }

    const onQuestionChange = (_ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setQuestion(newValue || '')
    }

    const sendQuestionDisabled = disabled || !question.trim()

    return (
      <Stack horizontal className={styles.questionInputContainer}>
        <TextField
          className={styles.questionInputTextArea}
          placeholder={placeholder}
          multiline
          resizable={false}
          borderless
          value={question}
          onChange={onQuestionChange}
          onKeyDown={onEnterPress}
        />
        <div
          className={styles.questionInputSendButtonContainer}
          role="button"
          tabIndex={0}
          aria-label="Ask question button"
          onClick={() => sendQuestion()}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ' ? sendQuestion() : null)}>
          {sendQuestionDisabled ? (
            <SendRegular className={styles.questionInputSendButtonDisabled} />
          ) : (
            <img src={Send} className={styles.questionInputSendButton} alt="Send Button" />
          )}
        </div>
        <div className={styles.questionInputBottomBorder} />
      </Stack>
    )
  }
)
