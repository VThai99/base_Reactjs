import i18n from '../../i18n'
import * as type from '../types'
const initialState = {
  lang: localStorage.getItem('current_lang')
    ? localStorage.getItem('current_lang')
    : '',
}

export default function lang(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case type.CHANGE_LANG:
      localStorage.setItem('current_lang', action.value)
      i18n.changeLanguage(action.value)
      return {
        ...state,
        lang: action.value,
      }
    case type.RESET_STATE:
      return initialState
    default:
      return state
  }
}
