'use client';

import React from 'react';

import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';

const DetailsInfo = () => {
  const t = useTranslate('COMP_Details_Info');
  return (
    <div className="details-info text-white bg-primary h-100 d-flex flex-column align-items-center justify-content-center p-3 rounded-2">
      <h1 className="mb-0   fw-bold healthy-title">{t('HEALTHY_PRODUCTS')}</h1>
      <h2 className="mb-2 fw-bold natural-products">{t('NATURAL_PRODUCTS')}</h2>
      <p className="mb-5 font-17 fw-bold product-description">{t('NO_PRESERVATIVES')}</p>
      <Link
        href={'/list/healthy'}
        className="d-flex justify-content-center w-75 bg-white py-2 px-5  rounded text-secondary fw-bold"
      >
        {t('SHOP_NOW')}
      </Link>
    </div>
  );
};

export default DetailsInfo;
