import { combineReducers } from 'redux'
import links from './links'
import selectedLink from './selected-links'

export default combineReducers({
  links, 
  selectedLink
})