import { useState } from "react";
import styles from "@/app/components/scorekeeper/styles.css"


export default function ScoreKeeper(){
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);
    const [numberOfWrongAnswers, setNumberofWrongAnswers] = useState(0);

    
        return (
            <div className='score-container'>
                <h3>Correct: {numberOfCorrectAnswers}</h3>
                <h3>Wrong: {numberOfWrongAnswers}</h3>
            </div>
        )
}
