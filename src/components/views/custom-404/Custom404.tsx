import React from 'react';
import { ImageWithFallback } from '@components';
import custom404 from '@assets/images/static/404.png';
import { useTranslate } from '@app/hooks';
const Custom404 = () => {
  const t = useTranslate('COMP_Custom404');
  return (
    <div className="flex-col py-5 text-center static-page">
      <div className="empty-cart-image mb-5">
        <ImageWithFallback src={custom404} alt="cart is empty" width={400} height={400} className="img-fluid" />
      </div>
      <div className="mt-3">
        <h2 className="m-0">404</h2>
        <h3 className="text-muted mb-4">{t('NOT_FOUND')}</h3>
      </div>
    </div>
  );
};

export default Custom404;
