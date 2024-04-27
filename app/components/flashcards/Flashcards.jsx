'use client'
import { useState } from "react";
import styles from "@/app/components/flashcards/styles.css";
import { Shadows_Into_Light } from "next/font/google";

const shadowsIntoLight = Shadows_Into_Light({
  subsets:['latin'],
  weight: ['400'],
});

export default function Flashcards(){
    const [directions, setDirections] = useState ("directions display here");
    const [questionToDisplay, setQuestionToDisplay] = useState("question goes here");
    const [answerToDisplay, setAnswerToDisplay] = useState("???")

    return(
        <div className='cards-container'>
            <div className='question-card'>
                <h4>Question</h4>
                <p className={shadowsIntoLight.className}>{questionToDisplay}</p>
            </div>
            <div className="directions-box">
                <h3>{directions}</h3>
            </div>
            <div className='answer-card'>
                <h4>Answer</h4>
                <p className={shadowsIntoLight.className}>{answerToDisplay}</p>
            </div>
        </div>  
    )
}