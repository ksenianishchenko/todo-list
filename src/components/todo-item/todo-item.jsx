import React from 'react';

import './todo-item.scss';

const TodoItem = ({item, onToggleDone, onDeleteItem}) => {
  return (
    <div className={item.done ? `todo-item done` : `todo-item`}>
    <span className='todo-item__status'
    onClick={() => onToggleDone(item)}></span>
    <span className='todo-item__label'>{item.label}</span>
    <span className='todo-item__remove'
      onClick={() => onDeleteItem(item)}></span>
    </div>
  )
}

export default TodoItem;
