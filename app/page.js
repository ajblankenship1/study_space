'use client'
import { useState, useEffect } from "react";
import ScoreKeeper from "./components/scorekeeper/ScoreKeeper";
import Flashcards from "./components/flashcards/Flashcards";
import NewCard from "./components/newcard/NewCard";
import RightOrWrongBox from "./components/rightWrongBox/RightOrWrong";
import { Shadows_Into_Light } from "next/font/google";
import { retrieveFlashcards } from "./server_actions/action";

const shadowsIntoLight = Shadows_Into_Light({
  subsets:['latin'],
  weight: ['400'],
});

export default function Home() {
  const [listOfFlashcards, setListOfFlashcards] = useState([]);

  useEffect(() =>{
    async function wrapFunction(){
      const results = await retrieveFlashcards();
      setListOfFlashcards(results);
    }
    wrapFunction();
  }, []);


  return (
    <main >
      <header>
        <h1> Study Time</h1>
        <div className="logo"></div>
        <p className={shadowsIntoLight.className}>Create Flahcards, Test Your Knowledge, Get Real Smart!</p>
      </header>
      <ScoreKeeper/>
      {listOfFlashcards.length === 0 ? "Loading Flashcards" : <Flashcards data={listOfFlashcards}/>}
      <RightOrWrongBox/>
      <NewCard/>
    </main>
  );
}
