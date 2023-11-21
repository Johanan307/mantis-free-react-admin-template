import { combineReducers } from 'redux'
import menu from './menu'
import projects from '../components/logic/reducer'
import auth from '../pages/authentication/auth-forms/logic/reducer'

const reducers = combineReducers({
  menu,
  projects,
  auth,
})

export default reducers
