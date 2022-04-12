import * as type from '../types'

export function chageStatus(status) {
  return {
    type: type.CHANGE_STATUS,
    value: status,
  }
}
export function chageStatusCompany(status) {
  return {
    type: type.CHANGE_STATUS_COMPANY,
    value: status,
  }
}
