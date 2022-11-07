import React, { useState } from "react";
import Button from "./Shared/Button";

import "./InputContainer.css";
import TodoItem from "./TodoItem";

const InputContainer = () => {
  const [inputValue, setInputValue] = useState("");

  const [todoItems, setTodoItems] = useState(["Learn React", "New Concepts"]);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addTodoHandler = () => {
    if (inputValue.trim() === "") {
      return;
    }
    setTodoItems((prevItems) => [...prevItems, inputValue]);
    setInputValue("");
  };

  const deleteTodoHandler = (value) => {
    const filteredTodo = todoItems.filter((todoItem) => todoItem !== value);
    setTodoItems(filteredTodo);
  };

  const removeAllHandler = () => {
    setTodoItems([]);
  };

  return (
    <div>
      <div className="inputContainer">
        <input
          className="todo-input"
          type="text"
          value={inputValue}
          onChange={inputChangeHandler}
        />
        <Button title="Add +" onClick={addTodoHandler} />
      </div>
      <div className="remove-btn">
        <Button title="Remove All" onClick={removeAllHandler} />
      </div>
      <div>
        {todoItems.map((todoItem) => (
          <TodoItem
            title={todoItem}
            key={todoItem}
            onDelete={() => {
              deleteTodoHandler(todoItem);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InputContainer;
