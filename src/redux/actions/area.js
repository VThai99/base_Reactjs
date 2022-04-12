import * as type from '../types'

export function changePopular(id) {
  return {
    type: type.CHANGE_POPULAR_AREA,
    popularId:  id ,
  }
}
export function changeCity(id) {
  return {
    type: type.CHANGE_CITY,
    cityId: id ,
  }
}
export function changeDistrict(id) {
  return {
    type: type.CHANGE_DISTRICT,
    districtId:  id ,
  }
}
