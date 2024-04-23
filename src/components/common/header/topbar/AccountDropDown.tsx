'use client';

import React from 'react';
import { DropdownMenu } from 'reactstrap';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useLocale } from 'next-intl';

import rec from '@assets/images/icons/rec.svg';
import { useTranslate } from '@app/hooks';
import { Link,  usePathname } from '@navigation';
import { Actions } from '@libs/actions';

interface IAccountDropDownProps {
  name?: string;
  setDropdownOpen: (status: boolean) => void;
}

const AccountDropDown = (props: IAccountDropDownProps) => {
  const { name, setDropdownOpen } = props;
  const locale = useLocale();
  const pathname = usePathname();

  const onLogout = async () => {
    await Actions.account.logout();

    signOut({
      callbackUrl: `${window.location.origin}/${locale}${pathname}`,
    });
  };

  const t = useTranslate('COMP_TopBar.COMP_AccountDropdown');

  return (
    <DropdownMenu className="account-dropdown ">
      <Image
        src={rec}
        alt="rec"
        width={0}
        height={0}
        className="position-absolute start-50 translate-middle-x rec-img"
      />
      <h6 className="user-name">
        {t('WELCOME')} {name || ''}
      </h6>
      <Link href="/profile/account" className="account-link d-block" onClick={() => setDropdownOpen(false)}>
        <i className="fa-solid fa-user icon text-primary"></i> {t('MY_ACCOUNT')}
      </Link>
      <Link href="/profile/address" className="account-link d-block" onClick={() => setDropdownOpen(false)}>
        <i className="fa-solid fa-solid fa-location-dot icon text-primary"></i> {t('ADDRESSES')}
      </Link>
      <Link href="/profile/my-orders" className="account-link d-block" onClick={() => setDropdownOpen(false)}>
        <i className="fa-solid fa-solid   fa-cube icon text-primary"></i> {t('ORDERS')}
      </Link>

      <Link className="account-link d-block mb-0   border rounded" href="#" onClick={onLogout}>
        <i className="fa-solid fa-arrow-right-from-bracket text-primary icon"></i>
        {t('LOGOUT')}
      </Link>
    </DropdownMenu>
  );
};

export default AccountDropDown;
