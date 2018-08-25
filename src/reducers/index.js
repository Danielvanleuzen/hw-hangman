import { combineReducers } from 'redux'
import links from './links'
import selectedLink from './selected-links'
import { BrowserRouter} from 'react-router-dom'



// ReactDOM.render(
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>,
//   document.getElementById('root')

// )



export default combineReducers({
  links, 
  selectedLink
})