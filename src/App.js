import React, { useState, useMemo } from 'react';
// import initialTodos from './todos.json';
import TodosList from './components/Todos/TodosList';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import MyInput from './components/Input/Input';
import Container from './components/Container/Container';

function App() {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Вивчити ази програмування', completed: true },
    { id: '2', text: 'Вчитися кожен день', completed: false },
    { id: '3', text: 'Знайти роботу', completed: false },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const sortedTodos = useMemo(() => {
    const normalizedSort = searchQuery.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedSort),
    );
  }, [searchQuery, todos]);

  const createTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = value => {
    setTodos(todos.filter(todo => todo.id !== value.id));
  };

  return (
    <Container>
      <div className="App">
        <TodoForm create={createTodo} />
        <div>
          <hr style={{ margin: '15px 0' }} />
          <MyInput
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Пошук..."
          />
        </div>
        {todos.length ? (
          <TodosList
            remove={removeTodo}
            todos={sortedTodos}
            title="Список завдань"
          />
        ) : (
          <h2 style={{ textAlign: 'center' }}> Завдання відсутні</h2>
        )}
      </div>
    </Container>
  );
}

export default App;

// class App extends Component {
//   state = {
//     todos: initialTodos,
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };

//   render() {
//     const { todos } = this.state;
//     const totalTodoCount = todos.length;
//     const completedTodoCount = todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0,
//     );

//     return (
//       <>
//         <div>
//           <p>Загальна кількість завдань: {totalTodoCount}</p>
//           <p>Кількість виконаних завдань: {completedTodoCount}</p>
//         </div>
//         {/* <Dropdown /> */}
//         <TodosList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </>
//     );
//   }
// }
