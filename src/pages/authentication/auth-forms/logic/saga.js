import { call, put, takeLatest } from 'redux-saga/effects'
import * as a from './actions'

function* registerBeforeLogIn(payload) {
  try {
    const response = yield call(
      fetch,
      `http://localhost:8000/api/register?email=${payload?.payload?.createEmail}&password=${payload?.payload?.createPassword}&repeatPassword=${payload?.payload?.repeatPassword}&name=${payload?.payload?.createName}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const reResponse = yield response.json()

    if (reResponse?.response === 'success') {
      yield put(a.registered())
    } else if (reResponse?.response === 'email-in-use') {
      console.log('E-mail is already in use')
      yield put(a.registered(null, null, true))
    } else {
      console.log('no success and new email')
    }
  } catch (e) {
    yield put(a.registered(null, null, true))
    console.error(e)
  }
}

function* logIn(payload) {
  try {
    const response = yield call(
      fetch,
      `http://localhost:8000/api/login?email=${payload?.payload?.email}&password=${payload?.payload?.password}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const userData = yield response.json()

    console.log({ userData })

    if (userData?.status === 'success') {
      yield put(a.loggedIn(userData))
    } else if (userData?.status === 'email-not-found') {
      yield put(a.loggedIn(null, null, true))
    } else if (userData?.status === 'invalid-password') {
      yield put(a.loggedIn(null, null, true))
    } else {
      console.log('NO SUCCESS')
    }
  } catch (e) {
    console.log(e)
    yield put(a.loggedIn(null, null, true))
  }
}

export default function* saga() {
  yield takeLatest(a.LOG_IN, logIn)
  yield takeLatest(a.REGISTER, registerBeforeLogIn)
}
