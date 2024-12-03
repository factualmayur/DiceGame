import ContextProvider from "./ContextProvider";  // Correct import
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import { useContext } from "react";
import Rules from "./Rules";

function Game() {
  
  return (
    <ContextProvider>  {/* Corrected */}
      <div className="flex mt-10 justify-evenly">
        <TotalScore />
        <NumberSelector />
      </div>
      <RollDice />
    </ContextProvider>
  );
}

export default Game;

