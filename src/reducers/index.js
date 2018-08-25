import { combineReducers } from 'redux'
import links from './links'
import selectedLink from './selected-links'
//import { BrowserRouter} from 'react-router-dom'




export default combineReducers({
  links, 
  selectedLink
})