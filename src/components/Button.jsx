import React from "react";

function Button({ text, logo, className = "", type, outlined, ...props }) {
  return (
    <div>
      <button
        className={`${
          outlined
            ? "bg-white text-black border-2 border-black" 
            : "bg-black text-white" 
        } font-bold px-8 py-2 rounded hover:scale-105 transition cursor-pointer duration-300 ${className} flex items-center`}
        {...props}
      >
        {logo && <span className="mr-2">{logo}</span>}
        {text}
      </button>
    </div>
  );
}

export default Button;
