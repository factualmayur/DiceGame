import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import HomeDice from "../assets/HomeDice.svg";

function Home() {
  const navigate = useNavigate(); 

  const handlePlayNow = () => {
    navigate('/Game'); 
  };

  return (
    <>
      <div className="flex justify-center gap-12 mt-32 text-center"> 
        <div>
          <img src={HomeDice} alt="Dice Game" />
        </div>
        <div className="flex flex-col gap-10 mb-0 mt-36">
          <h1 className="font-bold text-7xl">DICE GAME</h1>
          <Button className="ml-2" text="PLAY NOW" onClick={handlePlayNow} /> 
        </div>
      </div>
    </>
  );
}

export default Home;
