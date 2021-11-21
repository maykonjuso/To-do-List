import React, { useState, useEffect, useRef } from "react";
import "./TodoForm.css";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Edite sua tarefa"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit1"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Editar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Adiciona uma tarefa"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Adicionar
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
