import React from "react"
import Game from "./components/Game"
import "./components/style.css"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
function App(){
  
  const[dices, setDice] = React.useState(allDice());
  const[tenzies, setTenzies] = React.useState(false);

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
    if(!tenzies){
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
    if(allHeld && allSame){
      setTenzies(true)
    }
  }, [dices])

  
  const MapDice = dices.map(dice => {
    return <Game
            id = {dice.id} 
            value = {dice.value}
            isheld = {dice.isheld}
            holdDice = { () => holdDice(dice.id)}
        />
    }
  )
 
  return (
  <section>
    <main>
      {tenzies && <Confetti/>}
        
      <div>
        <h1 className="title">Tenzies</h1>
          <p className="instructions">
            <b>Click on the dice to hold them.Roll until all dice are the same.
            Click each die to freeze it at its current value between rolls.</b>
          </p>
         </div>
        <div className="dice-container">
            {MapDice} 
        </div>
        <div className="button--div">
              <button className="roll--button" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </div>
        <div className="footer">
          <pre><i>&copy;copyright of Evans Mwaura</i></pre>
        </div>
    </main>
  </section>
  )
}

export default App;