import { call, put, takeLatest } from 'redux-saga/effects'
import * as a from './actions'

function* loadList() {
  try {
    console.log('test')
    const response = yield call(fetch, 'http://localhost:8000/api/projects', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const ids = yield response.json()

    yield put(a.loadedList(ids))
  } catch (e) {
    yield put(a.loadedList(null, null, true))
    console.error(e)
  }
}

export default function* saga() {
  yield takeLatest(a.LOAD_LIST, loadList)
}
