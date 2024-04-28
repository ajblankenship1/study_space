'use client'
import { useState } from "react";
import { createNewFlashcard } from "@/app/server_actions/action";
import styles from "@/app/components/newcard/styles.css";


export default function NewCard(){
    const [questionInputValue, setQuestionInputValue] = useState("");
    const [answerInputValue, setAnswerInputValue] = useState("");
    const [newCardDisplay, setNewCardDisplay] = useState('hide-new-card-form');
    
    function handleQuestionInput(event){
        setQuestionInputValue(event.target.value)
    }

    function handleAnswerInput(event){
        setAnswerInputValue(event.target.value)
    }

    async function handleFormSumbit(event){
        event.preventDefault();
        const result = await createNewFlashcard(questionInputValue, answerInputValue);
        console.log(result);
        setQuestionInputValue("");
        setAnswerInputValue("");
    }


    return(
    <div className={newCardDisplay}>
        <div className="show-new-card-form">
            <h4>Add A New Flashcard!</h4>  
            <form onSubmit={handleFormSumbit}>
                <input type="text" placeholder='Write Question Here' value={questionInputValue} onChange={handleQuestionInput}/>
                <br/>
                <input type="text" placeholder='Write Answer Here' value={answerInputValue} onChange={handleAnswerInput}/>
                <br/>
                <div className="button-container">
                    <button className='form-submit-button'></button>
                    <button className='exit-button'></button>
                </div>
            </form>
        </div>
    </div>
    )
}