'use client';

import React from 'react';

import { useTranslate } from '@app/hooks';
import { CartType } from '@core';

import ItemRecap from './ItemRecap';

interface IOrderRecapProps {
  data: CartType | null | undefined;
}
const OrderRecap = (props: IOrderRecapProps) => {
  const { data } = props;
  const t = useTranslate('Comp_Order_Recap');
  return (
    <React.Fragment>
      <div className="border rounded  p-3 box">
        <h5 className="py-2 px-5 rounded" style={{ background: 'rgba(101, 175, 76, 0.1)' }}>
          {t('DELIVERY_TIME')} الاثنين، 23 أكتوبر 2023
        </h5>
        {data?.items?.map((item, index) => (
          <ItemRecap
            key={index}
            imgSrc={item.imageUrl}
            imgAlt={item.name}
            title={item.name}
            description={item.product?.description?.content}
            price={item.product?.price?.actual?.formattedAmount}
            qty={item.quantity}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default OrderRecap;
