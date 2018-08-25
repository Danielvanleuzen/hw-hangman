import * as React from 'react'
import { connect } from 'react-redux'
import * as Lib from '../lib/game'
import Hangman from './Hangman'
import {newGame, makeGuess} from '../actions/game'


class HangmanContainer extends React.PureComponent {

componentDidMount(){

   this.props.newGame(Lib.randomWord())
}


    render(){ 
        
    return(<Hangman
    
    />)
} 
}


const mapStateToProps = (state) => {
    return {state
    }
  }
 


  
  export default connect(mapStateToProps, {newGame, makeGuess})(HangmanContainer)