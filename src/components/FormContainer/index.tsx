import { Button } from '../Button'
import { Input } from '../Input'
import styles from './styles.module.css'

export function FormContainer() {
  return (
    <header className={styles.container}>
      <Input />
      <Button />
    </header>
  )
}
