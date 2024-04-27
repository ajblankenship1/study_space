'use client'


export default function NewCard(){
    <div>
        <button className='exitButton'>x</button>
        <h4>Add A New Flashcard to the stack!</h4>  
        <form >
            <input type="text" placeholder='Write Question Here' />
            <br/>
            <input type="text" placeholder='Write Answer Here' />
            <br/>
            <button className='formSubmitButton'>Submit</button>
        </form>
    </div>
}