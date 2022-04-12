import { combineReducers } from 'redux'
import search from './search'
import reservation from './reservation'
import area from './area'
import lang from './lang'
const rootReducer = combineReducers({
  search: search,
  reservation: reservation,
  area: area,
  lang: lang
})

export default rootReducer
