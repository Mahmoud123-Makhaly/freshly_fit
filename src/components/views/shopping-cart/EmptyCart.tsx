'use client';

import React from 'react';

import { ButtonMaker, ImageWithFallback } from '@components';
import emptyCart from '@assets/images/static/empty-cart.png';
import { useTranslate } from '@app/hooks';
const EmptyCart = () => {
  const t = useTranslate('COMP_EmptyCart');
  return (
    <div className="flex-col py-5 text-center static-page">
      <div className="empty-cart-image mb-5">
        <ImageWithFallback src={emptyCart} alt="cart is empty" width={400} height={400} className="img-fluid" />
      </div>
      <div className="mt-3">
        <h2 className="m-0">{t('CART-IS-EMPTY')}</h2>
        <h3 className="text-muted mb-4">{t('EMPTY_TILL_NOW')}</h3>
      </div>
      <div className="w-25 button-container">
        <ButtonMaker design="px-5" text={t('SHOP_NOW')} block />
      </div>
    </div>
  );
};

export default EmptyCart;
