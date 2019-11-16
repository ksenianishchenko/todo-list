import React from 'react';

import Filter from '../filter/filter';

import './footer.scss';

const Footer = ({itemsCount, itemsDone, onFilterChange}) => {
  return (
    <div className='footer'>
      <div className='footer__items-left'>
        {itemsCount} items left to done
      </div>
      <Filter onFilterChange={onFilterChange}/>
    </div>
  )
}

export default Footer;
