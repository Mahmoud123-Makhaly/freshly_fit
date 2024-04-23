'use client';

import React from 'react';

import { Link } from '@navigation';
import { useAppStore } from '@app/hooks';
import { usePathname } from 'next/navigation';

interface INavbarItemProps {
  text: string;
  url: string;
  className?: string;
}

const NavbarItem = (props: INavbarItemProps) => {
  const { text, url, className } = props;
  const pathName = usePathname();
  const { changePreloader } = useAppStore(state => ({ changePreloader: state.layout.changePreloader }));

  const onClose = () => {
    document.getElementById('navCanvas')?.classList.remove('show');
    document.querySelector('.navbar')?.classList.remove('overlay');
    document.body.style.overflow = 'auto';
  };
  return (
    <li className={`nav-item ${className}`}>
      <Link
        className={'nav-link'}
        aria-current="page"
        href={url}
        onClick={e => {
          if (new URL(e.currentTarget.href).pathname.toLowerCase() !== pathName.toLowerCase()) {
            changePreloader && changePreloader('enable');
            onClose();
          } else {
            e.preventDefault();
            return;
          }
        }}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavbarItem;
