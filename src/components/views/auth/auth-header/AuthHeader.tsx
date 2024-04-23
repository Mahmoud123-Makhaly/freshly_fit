'use client';

import React from 'react';
import { Container } from 'reactstrap';

import { ButtonMaker, ImageWithFallback } from '@components';
import { Link } from '@navigation';
import logo from '@assets/images/header/topbar-logo.png';
import { usePathname } from '@navigation';
import { useTranslate } from '@app/hooks';
import { useSearchParams } from 'next/navigation';

const AuthHeader = () => {
  const t = useTranslate('COMP_Auth_Header');
  const path = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('redirectURL') ? `?redirectURL=${searchParams.get('redirectURL')}` : '';

  let href: string;
  let text: string;
  switch (path) {
    case '/auth/login':
      href = `/auth/sign-up${query}`;
      text = t('SIGNUP');
      break;
    case '/auth/sign-up':
      href = `/auth/login${query}`;
      text = t('LOGIN');
      break;
    default:
      href = `/auth/login${query}`;
      text = t('LOGIN');
      break;
  }
  return (
    <header className="border-bottom">
      <Container>
        <div className="flex-between height-63 py-2">
          <Link href={'/'}>
            <ImageWithFallback src={logo} width={0} height={0} alt="topbar-logo" />
          </Link>
          <Link href={href} className="d-none d-lg-block">
            <ButtonMaker text={text} design=" px-5" />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default AuthHeader;
