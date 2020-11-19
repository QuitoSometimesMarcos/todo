import React, { useState, useEffect } from 'react';
import './App.css';

//TodoList -> TodoItem
//

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const onKeyDown = ({ target, keyCode }) => {
    if (keyCode === 13) {
      setNewTodo(target.value);
      target.value = '';
      setTodoList([...todoList, newTodo]);
    }
  };

  return (
    <div>
      <input onKeyDown={onKeyDown} type="text" />
      {todoList ? todoList.map((todo, idx) => <div key={idx}>{todo}</div>) : ''}
    </div>
  );
}

export default App;
