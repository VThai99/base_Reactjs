import * as type from '../types'

const initialState = {
  ctype: '',
  search_key: '',
  total_search: null,
}

export default function search(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case type.CHANGE_C_TYPE:
      return {
        ...state,
        ctype: action.value,
      }
    case type.CHANGE_SEARCH_KEY:
      return {
        ...state,
        search_key: action.searchKey,
      }
    case type.TOTAL_SEARCH:
      return {
        ...state,
        total_search: action.total,
      }
    case type.RESET_STATE:
      return initialState
    default:
      return state
  }
}
