import * as a from './actions.js'

const initialState = {
  user: null,
  logIn: false,
  loggedIn: false,
  loggingInError: null,
  register: false,
  registered: false,
  registeringError: null,
  successLoggedIn: false,
}

const reducer = (state = initialState, { payload, type, error }) => {
  console.log(payload, type, error)
  switch (type) {
    case a.LOG_IN:
      return {
        ...state,
        logIn: true,
        loggedIn: false,
        loggingInError: error,
      }
    case a.LOGGED_IN:
      return {
        ...state,
        logIn: false,
        loggedIn: true,
        loggingInError: error,
        user: payload?.user,
      }
    case a.REGISTER:
      return {
        ...state,
        register: true,
        registered: false,
        registeringError: null,
      }
    case a.REGISTERED:
      return {
        ...state,
        register: false,
        registered: true,
        registeringError: error,
      }
    default:
      return state
  }
}

export default reducer
