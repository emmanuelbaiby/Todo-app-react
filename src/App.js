import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='relative'>
    <div className='todo-app'>
      <TodoList />
    </div>
    <p className='code-title'>@emmanuel</p>
    </div>
  );
}

export default App;