import React from "react";

function Bt({ children, selected, ...props }) {
  return (
    <button
      {...props}
      className={`flex items-center justify-center text-black transition-all duration-300 border rounded w-9 h-9 hover:bg-black hover:text-white Bt ${
        selected ? "bg-black text-white" : "text-black hover:bg-black hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

export default Bt;

