'use client';

import React from 'react';

import { useTranslate } from '@app/hooks';
import { ButtonMaker, ImageWithFallback } from '@components';
import { usePathname } from '@navigation';
import { Link } from '@navigation';
import logo from '@assets/images/header/topbar-logo.png';

import NavbarItem from './NavbarItem';

const NavBar = () => {
  const t = useTranslate('Comp_Navbar');

  const onClose = () => {
    document.getElementById('navCanvas')?.classList.remove('show');
    document.querySelector('.navbar')?.classList.remove('overlay');
    document.body.style.overflow = 'auto';
  };
  const path = usePathname();
  return (
    <div className="header-nav">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="collapse navbar-collapse justify-content-center" id="navCanvas">
            <div className="flex-between border-bottom d-lg-none offcanvas-header">
              <Link href={'/'} onClick={onClose}>
                <ImageWithFallback src={logo} alt="freshly fit" />
              </Link>
              <i onClick={onClose} className="fa-regular fa-circle-xmark float-end close-icon fa-lg"></i>
            </div>
            <ul className="navbar-nav flex-evenly w-100 px-lg-2 ">
              <NavbarItem text={t('MAIN')} url={'/'} className={path === '/' ? 'active' : ''} />
              <NavbarItem
                text={t('BAKED')}
                url={'/list/baked'}
                className={path.includes('/list/baked') ? 'active' : ''}
              />
              <NavbarItem
                text={t('HEALTHY_BACKED')}
                url={'/list/healthy'}
                className={path.includes('/list/healthy') ? 'active' : ''}
              />
              <NavbarItem
                text={t('SNACKS')}
                url={'/list/salizone'}
                className={path.includes('/list/salizone') ? 'active' : ''}
              />
              <NavbarItem text={t('RECIPES')} url={'/recipe'} />
              <NavbarItem
                text={t('COMMON_QUESTIONS')}
                url={'/content/f-and-q'}
                className={path.includes('/faqs') ? 'active' : ''}
              />
              <NavbarItem text={t('CONTACT_US')} url={'/contact-us'} />
              <div className="canvas-button w-100 d-lg-none">
                <ButtonMaker block>{t('LOGIN')}</ButtonMaker>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
