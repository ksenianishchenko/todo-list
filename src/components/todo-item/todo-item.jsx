import React from 'react';

import './todo-item.scss';

const TodoItem = ({item, onToggleDone, onDeleteItem}) => {
  return (
    <div className='todo-item'>
    <span className={item.done ? `todo-item__status done` : `todo-item__status`}
    onClick={() => onToggleDone(item)}></span>
      {item.label}
    <span className='todo-item__remove'
      onClick={() => onDeleteItem(item)}></span>
    </div>
  )
}

export default TodoItem;
