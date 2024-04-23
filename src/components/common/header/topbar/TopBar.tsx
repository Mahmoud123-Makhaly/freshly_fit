'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container, Dropdown, DropdownToggle } from 'reactstrap';
import { useSession } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

import logo from '@assets/images/header/topbar-logo.png';
import menu from '@assets/images/icons/menu.svg';
import { ButtonMaker, ImageWithFallback } from '@components';
import { useTranslate } from '@app/hooks';
import { Link, usePathname, useRouter } from '@navigation';

import AccountDropDown from './AccountDropDown';
import LanguageDropDown from './LanguagesDropDown';
import LoginDropDownMenu from './LoginDropDownMenu';
import ShoppingCartDropdown from './ShoppingCartDropdown';

const TopBar = () => {
  const t = useTranslate('COMP_TopBar');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [keyword, setKeyword] = useState<string>('');
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const handleToggleShow = () => {
    document.getElementById('navCanvas')?.classList.toggle('show');
    document.querySelector('.navbar')?.classList.add('overlay');
    document.body.style.overflow = 'hidden';
  };

  const search = () => {
    if (searchInputRef && searchInputRef.current?.value) {
      router.push(`/list?keyword=${encodeURIComponent(searchInputRef.current?.value)}`);
    }
  };

  useEffect(() => {
    if (pathName) {
      if (searchParams.has('keyword')) setKeyword(searchParams.get('keyword') ?? '');
      else setKeyword('');
    }
  }, [pathName, searchParams]);

  return (
    <div className="top-bar border-bottom">
      <Container className=" d-flex align-items-center">
        <div className="logo d-flex align-items-center fa-lg">
          <ImageWithFallback
            src={menu}
            alt="menu"
            width={0}
            height={0}
            className="d-lg-none bars"
            onClick={handleToggleShow}
          />
          <Link href={'/'}>
            <ImageWithFallback src={logo} width={0} height={0} alt="topbar-logo" />
          </Link>
        </div>
        <form key={pathName} className="topbar-form d-flex flex-grow-1">
          <input
            ref={searchInputRef}
            type="text"
            placeholder={t('SEARCH_PLACEHOLDER')}
            className="form-input flex-grow-1"
            defaultValue={keyword}
            onKeyDown={e => {
              if (e && e.key === 'Enter') {
                e.preventDefault();
                search();
              }
            }}
          />
          <ButtonMaker
            block={false}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              search();
            }}
          >
            <i className="fa-solid fa-magnifying-glass text-white icon"></i>
          </ButtonMaker>
        </form>

        <ul className="topbar-links d-flex mb-0 ">
          <li className="px-3">
            <ShoppingCartDropdown />
          </li>
          <li className="px-3">
            <Link href={session?.isAuthorized ? '/profile/wishlist' : '/auth/login?redirectURL=/profile/wishlist'}>
              <i className="fa-regular fa-heart heart text-primary"></i>
              <span className="d-none d-lg-inline-block">{t('FAVORITE')}</span>
            </Link>
          </li>
          <li className="px-3">
            <LanguageDropDown />
          </li>

          <li className="px-3">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="account position-relative">
              <DropdownToggle className="bg-white border-0 p-0  ">
                <i className="fa-regular fa-user user text-primary"></i>
                <span className="d-none d-lg-inline-block ">{t('MY_ACCOUNT')}</span>
              </DropdownToggle>
              {session?.isAuthorized ? (
                <AccountDropDown setDropdownOpen={setDropdownOpen} name={session.user!.firstName} />
              ) : (
                <LoginDropDownMenu setDropdownOpen={setDropdownOpen} />
              )}
            </Dropdown>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default TopBar;
