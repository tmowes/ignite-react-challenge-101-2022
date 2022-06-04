import { FormEvent, useCallback, useState } from 'react'

import { useTask } from '../../contexts/TaskProvider'
import { Button } from '../Button'
import { Input } from '../Input'
import styles from './styles.module.css'

export function FormContainer() {
  const { createTask } = useTask()
  const [taskDescription, setTaskDescription] = useState('')

  const onCreateTask = useCallback(
    (event: FormEvent) => {
      event.preventDefault()
      if (taskDescription.trim()) {
        createTask(taskDescription)
      }
    },
    [createTask, taskDescription],
  )

  return (
    <form className={styles.container}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <Button onClick={onCreateTask} />
    </form>
  )
}
