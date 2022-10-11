import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, sentItems] = useState([]);

  function addItem(inputText) {
    sentItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    sentItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                todoItem={todoItem}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
