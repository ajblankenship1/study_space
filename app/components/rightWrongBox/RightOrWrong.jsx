'use client'
import styles from "@/app/components/rightWrongBox/styles.css"

export default function RightOrWrongBox(){


    return(
       <div className="main-container">
            <div className="right-or-wrong-container">
                <button  className='right-button'></button>
                <button className='wrong-button'></button>
            </div>
            <div className="start-over-add-new-container">
                <button className='start-over-button' ></button>
                <button className="add-new-card-button"></button>
            </div>
        </div>
    )
}