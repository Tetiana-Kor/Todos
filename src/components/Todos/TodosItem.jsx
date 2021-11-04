import React from 'react';
import MyButton from '../Button/Button';
import './Todos.css';

const TodosItem = ({ number, todos, remove }) => {
 
    return (
        <div className="todos__content">
            <strong>{number}. {todos.text}</strong>
           <div>
          <MyButton
            onClick={() => remove(todos)}
            className="todos__btn"
          >Видалити</MyButton>
           </div>
      </div>
    )
}

export default TodosItem

// const TodosList = ({ todos, onDeleteTodo }) => (
//   <ul className="TodoList">
//     {todos.map(({ id, text, completed }) => (
//       <li key={id} className="TodoList__item">
//         <p className="TodoList__text">{text}</p>
//         <button onClick={() => onDeleteTodo(id)}>Видалити</button>
//       </li>
//     ))}
//   </ul>
// );

// export default TodosList;
