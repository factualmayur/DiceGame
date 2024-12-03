import React, { useContext, useState, useEffect } from "react";
import Bt from "./Bt";
import UserContext from "./UserContext";

function NumberSelector() {
  const { num, setNum } = useContext(UserContext);
  const [errorMsg, setErrorMsg] = useState("");

  // Use useEffect to display the error message whenever num is not set
  useEffect(() => {
    if (!num) {
      setErrorMsg("You have not selected a number");
    } else {
      setErrorMsg(""); // Clear the error message when a number is selected
    }
  }, [num]); // This effect runs whenever 'num' changes

  return (
    <div>
      <p style={{ color: "red" }}>{errorMsg}</p> {/* Display error message if no number is selected */}
      <div className="flex gap-3">
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <Bt
            key={number}
            onClick={() => setNum(number)}  // Update the selected number
            selected={num === number}       // Highlight the button if selected
          >
            {number}
          </Bt>
        ))}
      </div>
      <h1 className="flex justify-end mt-5 text-2xl font-semibold">
        Selected Number: {num}
      </h1>
    </div>
  );
}

export default NumberSelector;
