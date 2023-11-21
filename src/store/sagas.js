import { all } from 'redux-saga/effects'
import projectSaga from '../components/logic/saga'
import logIn from '../pages/authentication/auth-forms/logic/saga'

function* sagas() {
  yield all([projectSaga(), logIn()])
}

export default sagas
