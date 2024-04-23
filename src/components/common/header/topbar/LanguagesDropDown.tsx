'use client';

import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Label } from 'reactstrap';
import { useLocale } from 'next-intl';

import { useAppStore } from '@app/hooks';
import { ImageWithFallback } from '@components';
import { useRouter, usePathname } from '@navigation';
import rec from '@assets/images/icons/rec.svg';

import { Languages } from './Languages';

const LanguageDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isLanguageDropdown, setIsLanguageDropdown] = useState(false);
  const { changePreloader } = useAppStore(state => ({ changePreloader: state.layout.changePreloader }));

  useEffect(() => {
    const savedLang = localStorage.getItem('I18N_LANGUAGE');
    if (savedLang && savedLang != locale) {
      router.push(pathname, { locale: savedLang });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguageAction = (lang: any) => {
    localStorage.setItem('I18N_LANGUAGE', lang);
    router.push(pathname, { locale: lang });
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdown(!isLanguageDropdown);
  };
  return (
    <div className="language-dropdown">
      <Dropdown isOpen={isLanguageDropdown} toggle={toggleLanguageDropdown}>
        <DropdownToggle
          className="btn btn-icon rounded-circle flex-center border-0 dropdown-link p-0"
          tag="button"
          style={{ outline: '0' }}
        >
          <ImageWithFallback
            src={Languages.find(x => x.label === locale)?.flag}
            alt={Languages.find(x => x.label === locale)?.label || Languages[0].label}
            height="20"
            className="rounded"
          />
          <span className="mx-2 language-link">{locale.toUpperCase()}</span>
          <i className="fa-solid fa-chevron-down icon"></i>
        </DropdownToggle>
        <DropdownMenu className="language py-3 lang-dropdown-menu">
          <ImageWithFallback src={rec} alt="rec" width={0} height={0} className="rec-img" />

          {Languages.map((item, index) => {
            return (
              <DropdownItem
                key={index}
                onClick={() => {
                  changePreloader && changePreloader('enable');
                  changeLanguageAction(item.label);
                }}
                className={`d-flex justify-content-between lang-item ${locale === item.label ? 'active' : ''}`}
              >
                <Label className="align-middle">{item.name}</Label>
                <Input type="radio" id={`lang-${index}`} defaultChecked={locale === item.label ? true : false} />
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default LanguageDropdown;
