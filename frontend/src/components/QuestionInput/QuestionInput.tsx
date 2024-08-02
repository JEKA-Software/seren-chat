import { forwardRef, useImperativeHandle, useState } from 'react'
import { Stack, TextField } from '@fluentui/react'
import { SendRegular } from '@fluentui/react-icons'

import Send from '../../assets/Send.svg'

import styles from './QuestionInput.module.css'

interface Props {
  onSend: (question: string, id?: string) => void
  disabled: boolean
  placeholder?: string
  clearOnSend?: boolean
  conversationId?: string
}

export const QuestionInput = forwardRef(
  ({ onSend, disabled, placeholder, clearOnSend, conversationId }: Props, ref) => {
    const [question, setQuestion] = useState<string>('')

    useImperativeHandle(ref, () => ({
      sendQuestion: (text: string) => {
        setQuestion(text)
        sendQuestion(text)
      }
    }))

    const sendQuestion = (text?: string) => {
      const questionToSend = text || question
      if (disabled || !questionToSend.trim()) {
        return
      }

      if (conversationId) {
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
