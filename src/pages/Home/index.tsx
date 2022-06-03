import { FormContainer } from '../../components/FormContainer'
import { Header } from '../../components/Header'
import { TaskListContainer } from '../../components/TaskListContainer'
import styles from './styles.module.css'

export function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <FormContainer />
        <TaskListContainer />
      </div>
    </>
  )
}
