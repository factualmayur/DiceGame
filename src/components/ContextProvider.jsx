import React, { useState } from 'react';
import UserContext from './UserContext';

function ContextProvider({ children }) {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [isRolling, setIsRolling] = useState(false);
  const [num,setNum] = useState(" __")

  return (
    <UserContext.Provider value={{ score, setScore, currentDice, setCurrentDice, isRolling, setIsRolling ,num,setNum }}>
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;
