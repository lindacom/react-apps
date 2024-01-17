import { useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

export function App() {

  const [todos, setTodos] = useState({});

  useEffect(() => {
    const loadTodos = ();
  }, {});

  const createTodo = todoText => {
    // ...
  };

  const completeTodo = todoId => {
    // ...
  };

  const deleteTodo = todoId => {
    // ...
  };


  return (
    <div>
      <h1>My todos</h1>
      <NewTodoForm onClickCreate=/>

      <TodoList
        todos=
            onCompleteTodo=
            onDeleteTodo=/>
    </div>
  );
}
=======

>>>>>>> main

