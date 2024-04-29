'use client'
import { useState } from "react";
import styles from "@/app/components/flashcards/styles.css";
import { Shadows_Into_Light } from "next/font/google";

const shadowsIntoLight = Shadows_Into_Light({
  subsets:['latin'],
  weight: ['400'],
});

export default function Flashcards(props){
    const {data, setDirectionArrows, directions, setDirections, directionArrows, setCurrentIndex, currentIndex} = props;
    
    const [answerCardClass, setAnswerCardClass] = useState(true);


    function handleQuestionCardClick(){
        if (currentIndex === data.length - 1){
            setDirections("All Done! You Score 100%");
        }else{
            setCurrentIndex(currentIndex + 1);
            setAnswerCardClass(false);
            setDirections("Click The Answer Card to reveal the answer!")
            setDirectionArrows("direction-arrows-right");
        }
    }

    function handleAnswerCardClick(){
        if (answerCardClass === false){
            setAnswerCardClass(true);
            setDirections("Were you Right or Wrong?");
            setDirectionArrows("direction_arrows-down");
        }
    }

    return(
        <div className='cards-container'>
            <div className="question-card" onClick={handleQuestionCardClick}>
                <h4>Question</h4>
                <p className={shadowsIntoLight.className}>{data[currentIndex].question}</p>
            </div>
            <div className="directions-box">
                <h3>{directions}</h3>
                <div className={directionArrows}></div>
            </div>
            <div className="answer-card" onClick={handleAnswerCardClick}>
                <h4>Answer</h4>
                <p className={answerCardClass ? shadowsIntoLight.className : "hide-answer-card" }>{data[currentIndex].answer}</p>
            </div>
        </div>  
    )
}