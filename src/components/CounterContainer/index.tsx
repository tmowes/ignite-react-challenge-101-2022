import styles from './styles.module.css'
import { CounterContainerProps } from './types'

export function CounterContainer(props: CounterContainerProps) {
  const { label, counter, total } = props
  return (
    <div className={styles.container}>
      <strong className={`${styles.label} ${label === 'Concluídas' && styles.purple}`}>
        {label}
      </strong>
      <div className={styles.counter}>
        <strong>{counter}</strong>
        {!!total && <strong>{` de ${total}`}</strong>}
      </div>
    </div>
  )
}
