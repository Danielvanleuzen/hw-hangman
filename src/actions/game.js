export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS= 'MAKE_GUESS'

export function newGame(newWord) {
    return {
        type: NEW_GAME,
        payload: newWord

    }

}

export function makeGuess(letter) {
    return {
        type: MAKE_GUESS,
        payload: letter

    }


}