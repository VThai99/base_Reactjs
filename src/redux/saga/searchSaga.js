import { call, put, takeEvery } from 'redux-saga/effects'

function* test(action) {
  yield put({ type: 'CHANGE_C_TYPE' })
}

function* searchSaga() {
  yield call('CHANGE_C_TYPE', test)
}

export default searchSaga
