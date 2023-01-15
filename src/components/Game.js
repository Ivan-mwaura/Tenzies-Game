import React from 'react'
import "../components/style.css"


 function Game(props){
 
    const styles = {
        backgroundColor : props.isheld ? "#59E391" : "white"
    }
     /*<div className='die-face' style = {styles} onClick = {props.holdDice}> 
                 <h1> {props.value} </h1>
    </div> */
    let currentDice; 
    if(props.value === 1){
        currentDice = 
     <div class="first-face" style = {styles} onClick = {props.holdDice}>
         <span class="pip"></span>
     </div>
    }
    else if(props.value === 2){
        currentDice = 
            <div class="second-face" style = {styles} onClick = {props.holdDice}>
                <span class="pip"></span>
                 <span class="pip"></span>
            </div>
       } 
       else if(props.value === 3){
        currentDice = 
         <div class="third-face" style = {styles} onClick = {props.holdDice}>
            <span class="pip"></span>
            <span class="pip"></span>
            <span class="pip"></span>
        </div>
       }
       else if(props.value === 4){
        currentDice =
        <div class="fourth-face" style = {styles} onClick = {props.holdDice}>
            <div class="column">
                <span class="pip"></span>
                <span class="pip"></span>
            </div>
            <div class="column">
                <span class="pip"></span>
                <span class="pip"></span>
            </div>
        </div>
       }
       else if(props.value === 5){
        currentDice = 
        <div class="fifth-face" style = {styles} onClick = {props.holdDice}>
            <div class="column">
                <span class="pip"></span>
                <span class="pip"></span>
            </div>
            <div class="column">
                <span class="pip"></span>
            </div>
            <div class="column">
                <span class="pip"></span>
                <span class="pip"></span>
            </div>
        </div>
       }
       else if(props.value === 6){
        currentDice = 
        <div class="sixth-face" style = {styles} onClick = {props.holdDice}>
            <div class="column">
                <span class="pip"></span>
                <span class="pip"></span>
                <span class="pip"></span>
            </div>
            <div class="column">
                <span class="pip"></span>
                <span class="pip"></span>
                <span class="pip"></span>
            </div>
        </div>
       }
    return(
       currentDice
    )
 }
 export default Game;