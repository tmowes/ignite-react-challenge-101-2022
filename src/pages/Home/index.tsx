import { FormContainer } from '../../components/FormContainer'
import { Header } from '../../components/Header'
import { TaskListContainer } from '../../components/TaskListContainer'
import { TaskProvider } from '../../contexts/TaskProvider'
import styles from './styles.module.css'

export function Home() {
  return (
    <TaskProvider>
      <Header />
      <div className={styles.container}>
        <FormContainer />
        <TaskListContainer />
      </div>
    </TaskProvider>
  )
}
