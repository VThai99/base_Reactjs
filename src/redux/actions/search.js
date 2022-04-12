import * as type from '../types'

export function chageCType(Ctype) {
  return {
    type: type.CHANGE_C_TYPE,
    value: Ctype,
  }
}
export function changeKeySearch(keysearch){
  return {
      type: type.CHANGE_SEARCH_KEY,
      searchKey: keysearch
  }
}
export function changeTotal(total){
  return {
      type: type.TOTAL_SEARCH,
      total: total
  }
}
