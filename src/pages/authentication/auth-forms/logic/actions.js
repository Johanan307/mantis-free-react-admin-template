export const actionCreator = (type) => (payload, meta, error) => ({
  type,
  payload,
  meta,
  error: error || (payload && payload instanceof Error),
})

const ns = (type) => `AUTH_${type}`

export const LOG_IN = ns('LOG_IN')
export const logIn = actionCreator(LOG_IN)

export const LOGGED_IN = ns('LOGGED_IN')
export const loggedIn = actionCreator(LOGGED_IN)

export const REGISTER = ns('REGISTER')
export const register = actionCreator(REGISTER)

export const REGISTERED = ns('REGISTERED')
export const registered = actionCreator(REGISTERED)
