import React, { useContext, useState } from "react";
import Button from "./Button";
import UserContext from "./UserContext";
import Rules from "./Rules";

function RollDice() {
  const { isRolling, setIsRolling, currentDice, setCurrentDice, setScore, num } =
    useContext(UserContext);  // Added `num`

  const [rules, setRules] = useState(false);  // State for toggling rules visibility

  function DiceRole() {
    setIsRolling(true);
    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      setCurrentDice(roll);
      ScoreUp(roll);  // Call ScoreUp with the rolled value
      setIsRolling(false);
    }, 200);
  }

  function ScoreUp(roll) {
    if (roll === num) {  // Compare rolled value with selected number
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 2);
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 mt-10 text-center">
        <div className="flex items-center justify-center w-56 h-56">
          <img
            className={`w-full h-full object-contain cursor-pointer transition-opacity duration-300 ${
              isRolling ? "opacity-0" : "opacity-100"
            }`}
            src={`/Dice/dice_${currentDice}.png`}
            alt={`Dice ${currentDice}`}
            onClick={DiceRole}
          />
        </div>
        <h1 className="mt-4 text-xl font-bold">Click On Dice To Roll</h1>

        {/* Reset button */}
        <Button text={"Reset Score"} outlined={true} onClick={() => setScore(0)} />
        
        {/* Toggle Show Rules button */}
        <Button 
          text={rules ? "Hide Rules" : "Show Rules"}  // Change text dynamically
          onClick={() => setRules((prev) => !prev)}  // Toggle rules visibility
        />
      </div>

      {/* Conditionally render Rules component */}
      {rules && <Rules />}
    </>
  );
}

export default RollDice;
