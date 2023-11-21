import * as a from './actions.js'

const initialState = {
  list: [],
  loadingList: false,
  loadedList: false,
  loadingListError: false,
}

const reducer = (state = initialState, { payload, type, error }) => {
  switch (type) {
    case a.LOAD_LIST:
      return {
        ...state,
        loadingList: true,
        loadedList: false,
        loadingListError: error,
      }
    case a.LOADED_LIST:
      return {
        ...state,
        list: payload,
        loadingList: false,
        loadedList: true,
        loadingListError: error,
      }
    default:
      return state
  }
}

export default reducer
