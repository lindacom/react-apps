import './App.css';
import {useState} from 'react';
import {NewTodoForm} from './NewTodoForm';
import { TodoList } from './TodoList';

function App() {

  const [todos, setTodos] = useState({});

  useEffect (() => {
    const loadTodos = async() => {
      // ...
          }
  
    loadTodos(); }, {});

    const createTodo = todoText => {
      // ...
          }

    const completeTodo = todoId => {
      // ...
    }

    const deleteTodo = todoId => {
      // ...
    }
  

  return (
    <div>
   <h1>My todos</h1>
   <NewTodoForm onClickCreate = {todoText} />

   <TodoList
   todos={}
   onCompleteTodo = {}
   onDeleteTodo = {} />
   </div>
  );
}

export default App;
