import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function onlySpaces(str) {
    // return /^\s*$/.test(str);
    return str.trim().length === 0;
  }
  // function allLetter(inputtxt) {
  //   var letters = /^[A-Za-z]+$/;
  //   if (inputtxt.value.match(letters)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    return letters.test(inputtxt);
  }
  return (
    <div className="form">
      <input
        onChange={handleChange}
        name="todo"
        type="text"
        value={inputText}
      />
      <button
        onClick={() => {
          if (inputText && !onlySpaces(inputText) && allLetter(inputText))
            props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
