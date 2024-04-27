'use client'
import ScoreKeeper from "./components/scorekeeper/ScoreKeeper";
import Flashcards from "./components/flashcards/Flashcards";
import NewCard from "./components/newcard/NewCard";
import RightOrWrongBox from "./components/rightWrongBox/RightOrWrong";
import { Shadows_Into_Light } from "next/font/google";

const shadowsIntoLight = Shadows_Into_Light({
  subsets:['latin'],
  weight: ['400'],
});

export default function Home() {


  return (
    <main >
      <header>
        <h1> Study Time</h1>
        <div className="logo"></div>
        <p className={shadowsIntoLight.className}>Create Flahcards, Test Your Knowledge, Get Real Smart!</p>
      </header>
      <ScoreKeeper/>
      <NewCard/>
      <Flashcards/>
      <RightOrWrongBox/>
    </main>
  );
}
