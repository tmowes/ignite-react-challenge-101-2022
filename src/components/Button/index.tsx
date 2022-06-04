import { PlusCircle } from 'phosphor-react'

import styles from './styles.module.css'
import { ButtonProps } from './types'

export function Button(props: ButtonProps) {
  const { ...attrs } = props
  return (
    <button type="submit" className={styles.container} {...attrs}>
      Criar
      <PlusCircle weight="bold" size={16} />
    </button>
  )
}
