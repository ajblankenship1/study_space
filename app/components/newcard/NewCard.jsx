'use client'
import { useState } from "react";
import { createNewFlashcard } from "@/app/server_actions/action";
import styles from "@/app/components/newcard/styles.css";


export default function NewCard(props){
    const [questionInputValue, setQuestionInputValue] = useState("");
    const [answerInputValue, setAnswerInputValue] = useState("");
    const {newCardDisplay, setNewCardDisplay} = props;
    
    function handleQuestionInput(event){
        setQuestionInputValue(event.target.value)
    }

    function handleAnswerInput(event){
        setAnswerInputValue(event.target.value)
    }

    function handleExitClick(){
        setNewCardDisplay(false);
    }

    async function handleFormSumbit(event){
        event.preventDefault();
        const result = await createNewFlashcard(questionInputValue, answerInputValue);
        setQuestionInputValue("");
        setAnswerInputValue("");
    }


    return(
    <div className={ newCardDisplay ? "show-new-card-form" : "hide-new-card-form" }>
        <div className="new-card-form">
            <h4>Add A New Flashcard!</h4>  
            <form onSubmit={handleFormSumbit}>
                <input type="text" placeholder='Write Question Here' value={questionInputValue} onChange={handleQuestionInput}/>
                <br/>
                <input type="text" placeholder='Write Answer Here' value={answerInputValue} onChange={handleAnswerInput}/>
                <br/>
                <div className="button-container">
                    <button className='form-submit-button'></button>
                    <button onClick={handleExitClick}className='exit-button'></button>
                </div>
            </form>
        </div>
    </div>
    )
}