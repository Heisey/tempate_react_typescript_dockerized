import { rules } from 'core'
import styles from './styles'

const Main: React.FC<rules.IHeadingsMainProps> = (props) => {

  const {
    text = 'heading text'
  } = props
  return (
    <styles.Main>
      {text}
    </styles.Main>
  )
}

export default Main