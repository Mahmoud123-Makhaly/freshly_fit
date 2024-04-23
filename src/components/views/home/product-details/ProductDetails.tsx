'use client';

import React from 'react';

import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';
import { DTO } from '@tot/core/types';
import { Properties, ButtonMaker, ImageWithFallback } from '@components';
import tortela from '@assets/images/home/product-details/image.png';
import product1 from '@assets/images/home/product-details/fram1.svg';
import product2 from '@assets/images/home/product-details/frame2.svg';
import product3 from '@assets/images/home/product-details/frame3.svg';

const ProductDetails = ({ product }: { product: DTO.IProductDTO }) => {
  const t = useTranslate('COMP_HomePage');

  return (
    <div className="tortela-desc bg-primary rounded d-flex flex-wrap p-md-5">
      <div className="desc-part">
        <div className="pe-lg-5 d-flex flex-column justify-content-between h-100">
          <div className="d-flex justify-content-between pb-3 text-white">
            <h2 className="fw-bold">{product.name}</h2>
            <h4 className="font-18">200 سعر حراري</h4>
          </div>
          <p className="pb-3 text-white font-14">{product.description}</p>
          <div className="pb-3">
            <Properties
              data={[
                {
                  imgUrl: product1,
                  text: '350 جرام',
                  className: 'd-flex text-white align-items-center',
                },
                {
                  imgUrl: product2,
                  text: '350 جرام',
                  className: 'd-flex text-white align-items-center',
                },
                {
                  imgUrl: product3,
                  text: '350 جرام',
                  className: 'd-flex text-white align-items-center',
                },
              ]}
            />
          </div>
          <Link href={`/product/${product.slug}`}>
            <ButtonMaker block={true} text={t('SEE_MORE')} design="bg-white fw-bold text-info" />
          </Link>
        </div>
      </div>
      <div className="image-part ps-lg-5">
        <ImageWithFallback src={tortela} alt="tortela" width={0} height={0} />
      </div>
    </div>
  );
};

export default ProductDetails;
