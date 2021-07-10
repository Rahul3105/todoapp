import logo from './logo.svg';
import styles from './App.module.css';
import { useState } from 'react'
import { TodoInput } from './component/todoInput'
import { TodoList } from './component/todoList'
import { NavBar } from './component/sideNavBar';

function App() {
  let localStoTodos = localStorage.getItem('myTodos');
  if (localStoTodos == null) {
    localStoTodos = [];
  } else {
    localStoTodos = JSON.parse(localStoTodos);
  }
  console.log('looping')
  const [todos, setTodos] = useState(localStoTodos);
  localStorage.setItem('myTodos', JSON.stringify(todos));
  const [onlyCompleted, setOnlyCompleted] = useState(false);
  const [onlyImportant, setOnlyImportant] = useState(false);
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
  const showOnlyImp = () => {
    console.log('working')
    setOnlyImportant(!onlyImportant);
  }
  const impTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.important = !todo.important;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }
  return (
    <div className={styles.App}>
      <NavBar showOnlyCompleted={showOnlyCompleted} Name1={onlyCompleted ? 'Show All Tasks' : 'Show Only Completed Tasks'} showOnlyImp={ showOnlyImp} Name2={onlyImportant ? 'Show All Tasks' : 'Show Only Important Tasks'} />
      <div className={styles.todoAppCenter}>
        <h1>TODO List</h1>
        <TodoInput setTodos={setTodos} Todos={todos} />
        {todos.length === 0 ? <h1>Nothing to show</h1> :
          <TodoList Todos={onlyCompleted && onlyImportant ? todos.filter((todo) => todo.status && todo.important) : onlyCompleted ? todos.filter((todo) => todo.status) : onlyImportant ? todos.filter((todo) => todo.important) : todos} setCompleted={setCompleted} deleteTodo={deleteTodo} impTodo={impTodo}/>}
      </div>
    </div>
  );
}

export default App;
