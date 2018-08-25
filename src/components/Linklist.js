import * as React from 'react'
import {Link} from 'react-router-dom'
export default function LinkList(props) {

  return (<div>
    <h1>Hangman the game!</h1>
      <p><Link to = "/hangman"> 'start playing!'</Link>
      </p>
  </div>)
}