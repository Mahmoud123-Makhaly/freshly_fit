import React from 'react';
import { DropdownMenu } from 'reactstrap';
import Image from 'next/image';

import rec from '@assets/images/icons/rec.svg';
import { useTranslate } from '@app/hooks';
import { Link, usePathname } from '@navigation';

interface ILoginDropdownProps {
  setDropdownOpen: (status: boolean) => void;
}
const LoginDropDownMenu = ({ setDropdownOpen }: ILoginDropdownProps) => {
  const t = useTranslate('COMP_TopBar.COMP_LoginDropdown');
  const pathname = usePathname();

  return (
    <DropdownMenu className="account-dropdown position-absolute">
      <Image
        src={rec}
        alt="rec"
        width={0}
        height={0}
        className="position-absolute start-50 translate-middle-x rec-img"
      />

      <Link
        className="dropdown-item text-center border rounded"
        href={`/auth/login?redirectURL=${pathname}`}
        onClick={() => setDropdownOpen(false)}
      >
        {t('LOGIN')}
      </Link>

      <Link
        className="dropdown-item text-center border rounded"
        href={`/auth/sign-up?redirectURL=${pathname}`}
        onClick={() => setDropdownOpen(false)}
      >
        {t('CREATE_ACCOUNT')}
      </Link>
    </DropdownMenu>
  );
};

export default LoginDropDownMenu;
