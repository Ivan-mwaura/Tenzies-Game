import React from 'react'
import "../components/style.css"

 function Game(props){
  
    const styles = {
        backgroundColor : props.isheld ? "#59E391" : "white"
    }
    return(
       <div className='die-face' style = {styles} onClick = {props.holdDice}> 
                 <h1> {props.value} </h1>
        </div> 
    )
 }
 export default Game;