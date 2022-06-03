import logo from '../../assets/logo.svg'
import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Logo todo" />
    </header>
  )
}
