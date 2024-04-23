import React from 'react';

import { ImageWithFallback } from '@components';
import emptyImg from '@assets/images/static/no-result.png';
import { useTranslate } from '@app/hooks';
const Empty = () => {
  const t = useTranslate('COMP_Profile_Address');
  return (
    <div className="flex-col py-5 text-center static-page">
      <div className="empty-wishlist-image mb-5">
        <ImageWithFallback
          src={emptyImg}
          alt="wishlist is empty"
          width={0}
          height={0}
          sizes="100vw"
          className="img-fluid"
        />
      </div>
      <div className="mt-3">
        <h2 className="m-0">{t('EMPTY_MSG')}</h2>
      </div>
    </div>
  );
};

export default Empty;
