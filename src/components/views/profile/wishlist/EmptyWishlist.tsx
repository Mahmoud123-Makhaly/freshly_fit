'use client';

import React from 'react';

import { ButtonMaker, ImageWithFallback } from '@components';
import emptyWishlist from '@assets/images/static/empty-wishlist.png';
import { useTranslate } from '@app/hooks';
import { useRouter } from '@navigation';
const EmptyWishlist = () => {
  const t = useTranslate('COMP_EmptyWishlist');
  const router = useRouter();

  return (
    <div className="flex-col py-5 text-center static-page">
      <div className="empty-wishlist-image mb-5">
        <ImageWithFallback src={emptyWishlist} alt="wishlist is empty" width={400} height={400} className="img-fluid" />
      </div>
      <div className="mt-3">
        <h2 className="m-0">{t('WISHLIST-IS-EMPTY')}</h2>
        <h3 className="text-muted mb-4">{t('EMPTY_TILL_NOW')}</h3>
      </div>
      <div className="w-25 button-container">
        <ButtonMaker design="px-5" text={t('SHOP_NOW')} block onClick={() => router.push('/list')} />
      </div>
    </div>
  );
};

export default EmptyWishlist;
