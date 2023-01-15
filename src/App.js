import React from "react";
import Game from "./components/Game"
import "./components/style.css"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import { useTimer } from 'use-timer'
import UsewindowWidth from "./components/useWindowSize";


function App(){

  const width = UsewindowWidth
  let classes = 'default'

  if (width < 600) {
    classes = 'mobile';
  } else if (width >= 600 && width < 1024) {
    classes = 'tablet';
  } else {
    classes = 'desktop';
  }
  
  
  const[dices, setDice] = React.useState(allDice());
  const[tenzies, setTenzies] = React.useState(false);
  const  { time, start, pause, reset} = useTimer(
    {
      endTime : 0,
      initialTime: 25,
      timerType:"DECREMENTAL",
      onTimeOver:()=>{
        return time
      }
    }

  );
 
  
  function generateNewDie(){
    return{
        id:nanoid(),
        value: Math.ceil(Math.random() * 6),
        isheld:false
    }
  }
  function allDice(){
    const  newDice = []
    for( let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
    return(
      newDice
    )
  }
  function rollDice (){
    if(!tenzies && time > 0){
       setDice(oldDice => oldDice.map(die =>{
          return(
            die.isheld ? die: generateNewDie()
          )
        }))
        }else{
          setTenzies(false)
          setDice(allDice())
        }
    }

  function holdDice(id){
    setDice(oldDice => oldDice.map(die => {
      return (
            die.id === id ? {...die, isheld : !die.isheld} : die
          )
    }))
  }
 
React.useEffect( () => {
    const allHeld = dices.every(die => die.isheld === true)
    const firstValue = dices[0].value
    const allSame = dices.every(die => die.value === firstValue)
    if(allHeld && allSame ){
      setTenzies(true)
      
    }
    else{
      setTenzies(false)
    }
  }, [dices])

  
  const MapDice = dices.map(dice => {
    console.log(dice.id)
    return <Game
            id = {dice.id} 
            value = {dice.value}
            isheld = {dice.isheld}
            holdDice = { () => holdDice(dice.id)}
        />
    }
  )
 

  return (
  <section className={classes}>
    <main className={classes}>
      
      {/*{tenzies && <Confetti />}*/}
      {tenzies && <Confetti/>}
      {tenzies && <div className="message--win" ><h2>You Won the Game the Game</h2></div> }
      {time === 0 && !tenzies ? <div className="message--loose"><h2>You lost the game</h2></div> : " " }
        <div>
          <h1 className="title">Tenzies Dice</h1>
          <p className="instructions">
            <b><i>Click on the dice to hold them.Click  start to start count Down .Roll until all dice are the same.
            Click each die to freeze it at its current value between rolls. 
            Test your speed in  25 seconds .After win click start then click new game</i></b>
          </p>
         </div>
         
        <div className="dice-container">
            {MapDice} 
        </div>
        <div className="button--div">
              <button className="roll--button" onClick={rollDice}>{!tenzies && time > 0 ? "Roll" : "New Game"}</button>
        </div>
        
        <div className="timerDisplay" >
          <span>Time : {time} secs:</span>
         
        </div>
        <div className="buttons">
            <button className="pauseTimer" onClick={pause} >Pause</button>
            <button className="startTimer" onClick={start}>Start</button>
            <button className="stopTimer" onClick={reset} >Reset</button>
        </div>
       {/* <div>
          <button className="finish--game" onClick={finishGame}>Finish game</button>
  </div>*/}
        <div className="footer">
          <pre><i>&copy;copyright of Evans Mwaura</i></pre>
        </div>
    </main>
  </section>
  )
}

export default App;