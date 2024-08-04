import { commonQuestions } from '../../constants/commonQuestions'
import styles from './CommonQuestions.module.css'

export default function CommonQuestions({
  handleCommonQuestion
}: {
  handleCommonQuestion: (text: string, answer: string) => void
}) {
  return (
    <div className={styles.buttonContainer}>
      {commonQuestions.map((item, index) => (
        <button key={index} className={styles.button} onClick={() => handleCommonQuestion(item.question, item.answer)}>
          <span className={styles.buttonText}>{item.buttonText}</span>
        </button>
      ))}
    </div>
  )
}
