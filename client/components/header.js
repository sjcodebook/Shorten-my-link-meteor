import React from 'react';
import LinkCreate from './link_create';
import { Links } from '../../imports/collections/links';
import LinkList from './../components/link_list';

const Header = () => {
  return (
    <div className='container'>
      <div className='nav navbar-default'>
        <div className='navbar-header'>
          <a className='navbar-brand'>Shorten My Link</a>
        </div>
      </div>
      <LinkCreate />
      <LinkList />
    </div>
  );
};

export default Header;
