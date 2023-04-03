import React, { useState } from "react";

function App() {
  const [HeadingText, setHeadingText] = useState("Hello"); //setting and using State
  const [isMouseOver, setMouseOver] = useState(false); //setting and using State
  function handleClick() {
    setHeadingText("Submitted");
  }
  function handleMouseHover() {
    setMouseOver(true);
  }
  function handleMouseOver() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{HeadingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "Black" : "white" }} //used conditional redering
        onMouseOver={handleMouseHover} //used Event listners
        onMouseOut={handleMouseOver} //used Event listners
        onClick={handleClick} //used Event listners
      >
        Submit
      </button>
    </div>
  );
}

export default App;
