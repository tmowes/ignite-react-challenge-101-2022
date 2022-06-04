import clipboard from '../../assets/clipboard.png'
import styles from './styles.module.css'

export function EmptyTasks() {
  return (
    <header className={styles.container}>
      <img src={clipboard} alt="Sem tarefas cadastradas" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </header>
  )
}
