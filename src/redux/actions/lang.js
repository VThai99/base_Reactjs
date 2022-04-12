import * as type from '../types'

export function changLang(lang) {
  console.log(lang)
  return {
    type: type.CHANGE_LANG,
    value: lang,
  }
}
export function reset() {
  return {
    type: type.RESET_STATE,
  }
}
