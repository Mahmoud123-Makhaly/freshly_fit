'use client';

import React from 'react';
import { Badge, Col, Row } from 'reactstrap';
import Image from 'next/image';
import { Steps } from 'primereact/steps';

import { CartSummary, ItemRecap, ShippingAddress, ImageWithFallback } from '@components';
import { CommonAddress, cartData } from '../../../../common/common-address/CommonArrays';
import { useTranslate } from '@app/hooks';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import loading from '@assets/images/profile/loading.svg';
import done from '@assets/images/profile/done.svg';
interface IReturnDetails {
  products: Array<{
    title: string;
    img: string | StaticImport;
    price: number;
    discount?: number;
    currency?: string;
    quantity?: number;
  }>;
}
const ReturnDetails = (props: IReturnDetails) => {
  const { products } = props;
  const defaultAddress = CommonAddress;
  const newcartData = cartData;
  const t = useTranslate('COMP_Return_Details');
  const stepper = [
    { label: 'kkk', icon: <ImageWithFallback src={loading} alt="loading" /> },
    {
      label: 'lll',
      icon: <ImageWithFallback src={done} alt="loading" />,
      step: <ImageWithFallback src={done} alt="loading" />,
    },
    {
      label: 'lll',
      icon: <ImageWithFallback src={done} alt="loading" />,
      menuItem: <ImageWithFallback src={done} alt="loading" />,
    },
  ];
  return (
    <div className="view-returns">
      <h3 className="text-24 text-info view-returns-title rounded">{t('VIEW_RETURNS')}</h3>
      <div>
        <Steps model={stepper} />
      </div>
      <Row>
        {products.map((product, index) => (
          <Col className="col-12" key={index}>
            <ItemRecap
              title={product.title}
              price={product.price}
              discount={product.discount}
              qty={product.quantity}
              imgSrc={product.img}
              imgAlt="product"
              className="mb-0"
            />
          </Col>
        ))}
      </Row>
      <div className="shippment-details rounded mb-3">
        <h5 className="shippment-title mb-0"> {t('SHIPPMENT_DELIVERY_ADDRESS')}</h5>
        <div className="shippment-info">
          <ShippingAddress data={defaultAddress[0]} />
        </div>
      </div>
      <div className="order-summary rounded mb-3">
        <h5 className="order-summary-title mb-0 flex-between">
          <p className="pill"> {t('BILL')}</p>
          <Badge color="primary" className="rounded-pill badge">
            {t('CASH')}
          </Badge>
        </h5>
        <div className="order-summary-info">
          <CartSummary title={t('CART_SUMMARY')} data={newcartData} />
        </div>
      </div>
    </div>
  );
};

export default ReturnDetails;
