import { useTask } from '../../contexts/TaskProvider'
import { CounterContainer } from '../CounterContainer'
import { EmptyTasks } from '../EmptyTasks'
import { Task } from '../TaskItem'
import styles from './styles.module.css'

export function TaskListContainer() {
  const { tasks, totalTasks, totalPending } = useTask()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <CounterContainer label="Tarefas Criadas" counter={totalTasks} />
        <CounterContainer label="Concluídas" counter={totalPending} total={totalTasks} />
      </header>
      {totalTasks === 0 ? (
        <EmptyTasks />
      ) : (
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      )}
    </div>
  )
}
