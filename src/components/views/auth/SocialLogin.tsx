'use client';

import React from 'react';

import { ImageWithFallback } from '@components';
import { useTranslate } from '@app/hooks';
import fbIcon from '@assets/images/auth/facebook.svg';
import gIcon from '@assets/images/auth/google.svg';

const SocialLogin = () => {
  const t = useTranslate('COMP_SOCIAL_LOGIN');

  return (
    <React.Fragment>
      <div className="other-options">
        <span>{t('OR')}</span>
      </div>
      <div className="social-login">
        <button className="d-flex w-100 bg-white p-2 rounded mb-3 border password">
          <div className="border-end px-3">
            <ImageWithFallback src={fbIcon} alt="facebook SignUp" />
          </div>
          <span className="px-3">{t('FACEBOOK_LOGIN')}</span>
        </button>
        <button className="d-flex w-100 bg-white p-2 rounded  border password">
          <div className="border-end px-3">
            <ImageWithFallback src={gIcon} alt="google SignUp" />
          </div>
          <span className="px-3">{t('GOOGLE_LOGIN')}</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default SocialLogin;
