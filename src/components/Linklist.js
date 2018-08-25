import * as React from 'react'

export default function LinkList(props) {

  return (<div>
    <h1>Hangman the game!</h1>
  
      { props.links.map(link =>
        <p key={link.id} onClick={() => props.selectLink(link.id)}>
          { link.name }
        </p>
      ) }
    
  </div>)
}