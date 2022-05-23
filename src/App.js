import React , {useState, useEffect} from "react";
import { Figure } from "./components/Figure";
import { Header } from "./components/Header";
import './App.css'
import { WrongLetters } from "./components/WrongLetters";
import { Word } from "./components/Word";
import { showNotification as show } from "./helpers/helpers";
import { Notification } from "./components/Notification";
import { Popup } from "./components/Popup";



const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);
let playable = true;

const correctLetters = [];
const wrongLetters = [];




function App() {
  const [playeble, setPlayeble] = useState(true);
  const [correctLetters,setCorrectLetters] = useState([]);
  const [wrongLetters,setWrongLetters] = useState([]);
  const [showNotification,setShowNotification] = useState(false);

  useEffect(() => {
const handleKeydown = event => {
  const {key,keyCode} = event;
  
    if (playable && keyCode >= 65 && keyCode <= 90) {
      const letter = key.toLowerCase();

      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          setCorrectLetters(currentLettert => [...currentLettert, letter])
        } else {
          show(setShowNotification);
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters(wrongLetters => [...wrongLetters, letter])
        } else {
          show(setShowNotification);
        }
      }
    }
  }

  
  window.addEventListener('keydown', handleKeydown);
return () => window.removeEventListener('keydown', handleKeydown);
   
  },[correctLetters,wrongLetters,playable]);

  return (
    <>
   <Header />
   <div className="game-container">
   <Figure wrongLetters={wrongLetters} />
   <WrongLetters wrongLetters={wrongLetters}/>
   <Word selectedWord={selectedWord} correctLetters={correctLetters} />
   
   </div>

   <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayeble={setPlayeble}/>
   <Notification showNotification={showNotification}/>
  

    </>
  );
}

export default App;
