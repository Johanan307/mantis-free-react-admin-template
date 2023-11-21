export const actionCreator = (type) => (payload, meta, error) => ({
  type,
  payload,
  meta,
  error: error || (payload && payload instanceof Error),
})

const ns = (type) => `PROJECT_${type}`

export const LOAD_LIST = ns('LOAD_LIST')
export const loadList = actionCreator(LOAD_LIST)

export const LOADED_LIST = ns('LOADED_LIST')
export const loadedList = actionCreator(LOADED_LIST)
