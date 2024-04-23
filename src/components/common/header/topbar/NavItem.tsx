'use client';

import React from 'react';

import { ButtonMaker } from '@components';
import { Link } from '@navigation';

interface INavItemProps {
  text?: string;
  iconClassName?: string;
}
const NavItem = (props: INavItemProps) => {
  const { text, iconClassName } = props;
  return (
    <ButtonMaker block={false} design="bg-white border-0 py-0">
      <Link className="nav-link" href="#">
        <i className={iconClassName}></i>
        <span className="d-none d-lg-inline-block mx-1">{text}</span>
      </Link>
    </ButtonMaker>
  );
};

export default NavItem;
