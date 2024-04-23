import React from 'react';

import TopBar from './topbar/TopBar';
import { NavBar } from './navbar';

const Header = () => {
  return (
    <header className="border-bottom">
      <TopBar />
      <NavBar />
    </header>
  );
};

export default Header;
