import React from 'react';

import TodoItem from '../todo-item/todo-item';

import './todo-list.scss';

const TodoList = ({items, onToggleDone, onDeleteItem}) => {
  return (
    <div className='todo-list'>
     {
       items.map((item, index) => (
         <TodoItem item={item} key={item.id} onToggleDone={onToggleDone} onDeleteItem={onDeleteItem}/>
       ))
     }
    </div>
  )
};

export default TodoList;
