import { Check, Trash } from 'phosphor-react'

import { useTask } from '../../contexts/TaskProvider'
import styles from './styles.module.css'
import { TaskProps } from './types'

export function Task(props: TaskProps) {
  const { id, description, isDone } = props
  const { updateTask, deleteTask } = useTask()
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={`${styles.check} ${isDone && styles.done}`}
        onClick={() => updateTask(id)}
      >
        {isDone && <Check size={14} weight="bold" />}
      </button>
      <p className={`${styles.description} ${isDone && styles.done}`}>{description}</p>
      <button type="button" className={styles.deleteButton} onClick={() => deleteTask(id)}>
        <Trash size={18} weight="regular" />
      </button>
    </div>
  )
}
