import * as type from '../types'

const initialState = {
  status: false,
  statusCompany: false,
}

export default function reservation(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case type.CHANGE_STATUS:
      return {
        ...state,
        status: action.value,
      }
    case type.CHANGE_STATUS_COMPANY:
      return {
        ...state,
        statusCompany: action.value,
      }
    case type.RESET_STATE:
      return initialState
    default:
      return state
  }
}
