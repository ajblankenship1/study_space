import { useState } from "react";
import styles from "@/app/components/scorekeeper/styles.css"


export default function ScoreKeeper(props){
   const right = props.right;
   const wrong = props.wrong;

    
        return (
            <div className='score-container'>
                <h3>Right: {right}</h3>
                <h3>Wrong: {wrong}</h3>
            </div>
        )
}
