import { act } from '@testing-library/react'
import * as type from '../types'
const initialState = {
  popularId: (localStorage.getItem('popularId')) ? localStorage.getItem('popularId') :  null,
  districtId: localStorage.getItem('districtId') ? localStorage.getItem('districtId') : null,
  cityId: localStorage.getItem('cityId') ? localStorage.getItem('cityId') : null,
}
export default function area(state = initialState, action) {
  switch (action.type) {
    case type.CHANGE_CITY:
      localStorage.setItem('cityId', action.cityId)
      return {
        ...state,
        cityId: action.cityId,
      }
    case type.CHANGE_DISTRICT:
      localStorage.setItem('districtId', action.districtId)
      return {
        ...state,
        districtId: action.districtId,
      }
    case type.CHANGE_POPULAR_AREA:
      localStorage.setItem('popularId', action.popularId)
      return {
        ...state,
        popularId: action.popularId,
      }
    case type.RESET_STATE:
      return initialState
    default:
      return state
  }
}
