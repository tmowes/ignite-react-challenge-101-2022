import styles from './styles.module.css'
import { InputProps } from './types'

export function Input(props: InputProps) {
  const { ...attrs } = props
  return <input className={styles.container} {...attrs} />
}
