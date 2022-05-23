import React , {useEffect} from 'react'
import { checkWin } from '../helpers/helpers';


export const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayeble}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if (checkWin(correctLetters,wrongLetters,selectedWord) === 'win') {
      finalMessage = 'Congradulation u won !!!'
      playable = false;
  } else if (checkWin(correctLetters,wrongLetters,selectedWord) === 'lose' ) {
      finalMessage = 'U lost';
      finalMessageRevealWord = `...the word was: ${selectedWord}`;
      playable = false;
  }

  useEffect(() => setPlayeble(playable));

    return (
    <div className="popup-container" style={finalMessage ===! '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button>Play Again</button>
      </div>
    </div>
  )
}
