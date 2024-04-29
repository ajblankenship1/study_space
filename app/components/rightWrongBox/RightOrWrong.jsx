'use client'
import styles from "@/app/components/rightWrongBox/styles.css"
import { useState } from "react";
import { arrayShuffle } from "@/app/utilis/array";

export default function RightOrWrongBox(props){
    const setNumberOfWrong = props.setNumberOfWrong;
    const setNumberOfRight = props.setNumberOfRight;
    const setDirections = props.setDirections;
    const setDirectionArrows = props.setDirectionArrows;
    const {data, setNewCardDisplay, setListOfFlashcards, setCurrentIndex} = props;

    function handleRightClick(){
        setNumberOfRight((numberOfRight) =>{
            return numberOfRight +1;
        });

        setDirections("Click the Question Card to move onto the next question!");
        setDirectionArrows("direction-arrows-left");
    }

    function handleWrongClick(){
        setNumberOfWrong((numberofWrong)=>{
            return numberofWrong +1;
        });

        setDirections("Click the Question Card to move onto the next question!");
        setDirectionArrows("direction-arrows-left");
    }

    function handleAddNewCardClick(){
        setNewCardDisplay(true);
    }

    function handleStartOver(){
        setListOfFlashcards((listOfFlashcards)=>{
            console.log(listOfFlashcards);
             const shuffledArray = arrayShuffle([...listOfFlashcards]);
             return shuffledArray;
        });
        setCurrentIndex(0);
    }

    return(
       <div className="main-container">
            <div className="right-or-wrong-container">
                <button  onClick={handleRightClick} className='right-button'></button>
                <button onClick={handleWrongClick} className='wrong-button'></button>
            </div>
            <div className="start-over-add-new-container">
                <button onClick={handleStartOver} className='start-over-button' ></button>
                <button onClick={handleAddNewCardClick} className="add-new-card-button"></button>
            </div>
        </div>
    )
}