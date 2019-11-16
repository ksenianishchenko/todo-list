import React from 'react';

import './footer.scss';

const Footer = ({itemsCount, itemsDone}) => {
  return (
    <div className='footer'>
      <div className='footer__items-left'>
        {itemsCount} items left to done
      </div>
    </div>
  )
}

export default Footer;
