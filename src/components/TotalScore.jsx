import React, { useContext, useState } from "react";
import UserContext from "./UserContext";


function TotalScore() {
const {score} =useContext(UserContext)
    
  return (
    <div className="">
      <h1 className="font-bold text-7xl">{score}</h1>
      <h2 className="text-2xl">Total Score</h2>
    </div>
  );
}

export default TotalScore;

