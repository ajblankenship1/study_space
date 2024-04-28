'use server'
import myQuery from "@/database/db";

export async function createNewFlashcard(question, answer){
    try {
        await myQuery(`INSERT INTO Flashcards (question, answer) VALUES ("${question}", "${answer}");`);
        return "success";
    }catch(error){
        console.log(error);
        return error.sqlMessage;
    }
}

export async function retrieveFlashcards(){
    const results = await myQuery("SELECT * FROM Flashcards");
    return results;
}