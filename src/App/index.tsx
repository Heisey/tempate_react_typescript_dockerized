import { Abstract } from 'components'

import styles from './styles'

const App = () => {
  return (
    <styles.App data-testid='App'>
      <span>puppies</span>
      <Abstract.JumboTron />
    </styles.App>
  );
}

export default App;
