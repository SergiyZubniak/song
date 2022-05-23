import React from 'react'

export const Word = ({selectedWord, correctLetters}) => {
  return (
    <div className="word">
        {selectedWord.split('').map(
            (letter, i) => {
            return ( 
            <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
            )
})}
    </div>
    
  )
}
