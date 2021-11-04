import React, { useState } from "react";
import MyInput from "../Input/Input";
import MyButton from "../Button/Button";
// import s from "./TodoForm.module.css";

const TodoForm = ({create}) => {
    const [text, setText] = useState('');

    const addNewTodo = e => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text,
    };

    create(newTodo)
    setText('');
  };

    return (
        <form>
        <MyInput
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
          placeholder="Назва завдання"
        />
        <MyButton onClick={addNewTodo}>Створити завдання</MyButton>
      </form>

    )
}
export default TodoForm