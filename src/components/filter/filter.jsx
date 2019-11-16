import React from 'react';

import './filter.scss';

const filterButtons = [
  { name: 'all', label: 'All', active: true },
  { name: 'active', label: 'Active', active: false },
  { name: 'completed', label: 'Completed', active: false }
];

const onStatusChange = (arr, item) => {
  for(let i = 0; i < arr.length; i++) {
    arr[i].active = false;
    if(arr[i].name === item.name) {
      arr[i].active = true;
    }
  }
}

const Filter = ({onFilterChange}) => {
  const buttons = filterButtons.map((item, idx) => {
    return <button key={idx} type='button' className={item.active ? `filter__btn filter__btn ${item.name} highlight` : `filter__btn filter__btn ${item.name}`} onClick={() => {
        onFilterChange(item.name);
        onStatusChange(filterButtons, item);
      }
    }>
      {item.label}
    </button>
  })
  return (
    <div className='filter'>
      {buttons}
    </div>
  )
}

export default Filter;
