interface IInitState {
  param: boolean | null
}

const initState: IInitState = {
  param: null
}

type DEFAULT_ACTION_SET = 'DEFAULT_ACTION_SET'
type DEFAULT_ACTION_CLEAR = 'DEFAULT_ACTION_CLEAR'

interface IDefaultReducerAction {
  type: DEFAULT_ACTION_SET | DEFAULT_ACTION_CLEAR
  payload: {
    param: boolean | null
  }
}

const defaultReducer = (
  state: IInitState = initState,
  action: IDefaultReducerAction
) => {
  switch(action.type) {
    case 'DEFAULT_ACTION_SET':
      return state = action.payload

    case 'DEFAULT_ACTION_CLEAR':
      return state = { param: null }

    default:
      return state
  }
}

export default defaultReducer