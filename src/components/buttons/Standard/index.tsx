import { rules, types } from 'core'
import styles from './styles'

const Standard: types.vendors.FC<rules.IButtonsStandardProps> = (props) => {

  const {
    children = 'Button Text'
  } = props
  
  return (
    <styles.Standard data-testid='Buttons/Standard'>
      {children}
    </styles.Standard>
  )
}

export default Standard