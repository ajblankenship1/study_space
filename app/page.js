'use client'
import { useState, useEffect } from "react";
import ScoreKeeper from "./components/scorekeeper/ScoreKeeper";
import Flashcards from "./components/flashcards/Flashcards";
import NewCard from "./components/newcard/NewCard";
import RightOrWrongBox from "./components/rightWrongBox/RightOrWrong";
import { Shadows_Into_Light } from "next/font/google";
import { retrieveFlashcards } from "./server_actions/action";
import { arrayShuffle } from "./utilis/array";

const shadowsIntoLight = Shadows_Into_Light({
  subsets:['latin'],
  weight: ['400'],
});

export default function Home() {
  const [listOfFlashcards, setListOfFlashcards] = useState([]);
  const [numberOfRight, setNumberOfRight] = useState(0);
  const [numberOfWrong, setNumberOfWrong] = useState(0);
  const [directions, setDirections] = useState ("Click The Question Card to Begin!");
  const [directionArrows, setDirectionArrows] = useState("direction-arrows-left");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newCardDisplay, setNewCardDisplay] = useState(false);

  useEffect(() =>{
    console.log("ran");
    async function wrapFunction(){
      const results = await retrieveFlashcards();
     const shuffledResults = arrayShuffle(results);
      setListOfFlashcards(shuffledResults);
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
      <ScoreKeeper right={numberOfRight} wrong={numberOfWrong}/>
      {listOfFlashcards.length === 0 ? 
          "Loading Flashcards" 
        : 
          <Flashcards 
            data={listOfFlashcards}
            directions={directions} 
            setDirections={setDirections}
            directionArrows={directionArrows}
            setDirectionArrows={setDirectionArrows}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
      }
      <RightOrWrongBox 
        setNumberOfRight={setNumberOfRight} 
        setNumberOfWrong={setNumberOfWrong} 
        setDirections={setDirections} 
        setDirectionArrows={setDirectionArrows} 
        data={listOfFlashcards} 
        setNewCardDisplay={setNewCardDisplay}
        setListOfFlashcards={setListOfFlashcards}
        setCurrentIndex={setCurrentIndex}
      />
      <NewCard 
        newCardDisplay={newCardDisplay} 
        setNewCardDisplay={setNewCardDisplay}
      />
    </main>
  );
}
