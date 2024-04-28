'use client'
import { useState } from "react";
import styles from "@/app/components/flashcards/styles.css";
import { Shadows_Into_Light } from "next/font/google";

const shadowsIntoLight = Shadows_Into_Light({
  subsets:['latin'],
  weight: ['400'],
});

export default function Flashcards(props){
    const data = props.data;
    const [directions, setDirections] = useState ("Click The Question Card to Begin!");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answerCardClass, setAnswerCardClass] = useState(shadowsIntoLight.className)
    const [directionArrows, setDirectionArrows] = useState("direction-arrows-left")

    function handleQuestionCardClick(){
       setCurrentIndex(currentIndex + 1);
       setAnswerCardClass("hide-answer-card");
       setDirections("Click The Answer Card to reveal the answer!")
       setDirectionArrows("direction-arrows-right");
    }

    function handleAnswerCardClick(){
        setAnswerCardClass(shadowsIntoLight.className);
        setDirections("Were you Right or Wrong?");
        setDirectionArrows("direction_arrows-down");

    }

    return(
        <div className='cards-container'>
            <div className='question-card' onClick={handleQuestionCardClick}>
                <h4>Question</h4>
                <p className={shadowsIntoLight.className}>{data[currentIndex].question}</p>
            </div>
            <div className="directions-box">
                <h3>{directions}</h3>
                <div className={directionArrows}></div>
            </div>
            <div className="answer-card" onClick={handleAnswerCardClick}>
                <h4>Answer</h4>
                <p className={answerCardClass}>{data[currentIndex].answer}</p>
            </div>
        </div>  
    )
}