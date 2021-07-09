import logo from './logo.svg';
import styles from './App.module.css';
import { useState } from 'react'
import { TodoInput } from './component/todoInput'
import { TodoList } from './component/todoList'
import { NavBar } from './component/sideNavBar';
function App() {
  const [todos, setTodos] = useState([]);
  const [onlyCompleted, setOnlyCompleted] = useState(false);
  const setCompleted = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.status = !todo.status
      }
      return todo;
    })
    setTodos(updatedTodos);
  }
  const deleteTodo = id => {
    let updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos);
  }
  const showOnlyCompleted = () => {
    setOnlyCompleted(!onlyCompleted);
  }
  return (
    <div className={styles.App}>
      <NavBar showOnlyCompleted={showOnlyCompleted} Name={onlyCompleted ? 'Show All Tasks' : 'Show Only Completed Tasks'} />
      <div className={styles.todoAppCenter}>
        <h1>TODO List</h1>
        <TodoInput setTodos={setTodos} Todos={todos} />
        {todos.length === 0 ? <h1>Nothing to show</h1> :
          <TodoList Todos={onlyCompleted ? todos.filter((todo) => todo.status) : todos} setCompleted={setCompleted} deleteTodo={deleteTodo} />}
      </div>
    </div>
  );
}

export default App;
