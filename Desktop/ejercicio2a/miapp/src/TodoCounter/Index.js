import React from 'react'
import { TodoContext } from '../TodoContext/Index';
import './TodoCounter.css'

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
  return (
    <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOS</h2>
  );
};

export {TodoCounter}

