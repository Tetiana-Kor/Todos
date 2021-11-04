import React from 'react';
import TodosItem from "./TodosItem";
import '../../App.css';
// import './Todos.css';

const TodosList = ({ todos, title, remove }) => {
    return (
        <div className="todos">
            <h1>{title}</h1>
            {todos.map((todo, index) => (
                
                <TodosItem
                    remove={remove}
                    number={index + 1}
                    todos={todo}
                    key={todo.id}
                />
               
      ))}
      </div>
    )
}

export default TodosList