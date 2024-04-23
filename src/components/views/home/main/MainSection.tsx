'use client';

import React from 'react';

import { ImageWithFallback } from '@components';
import { useTranslate } from '@app/hooks';
import main from '@assets/images/home/first.png';

const MainSection = () => {
  const t = useTranslate('Index');
  return (
    <div className="home-banner">
      <ImageWithFallback src={main} alt={'home banner'} width={0} height={0} className="img-fluid" />
      <div className="main-content">
        <h1>{t('test')}</h1>
        <p>{t('DESCRIPTION')}</p>
      </div>
    </div>
  );
};

export default MainSection;
