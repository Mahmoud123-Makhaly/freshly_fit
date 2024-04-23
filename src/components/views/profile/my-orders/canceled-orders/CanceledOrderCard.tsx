'use client';
import React from 'react';
import { Col, Row } from 'reactstrap';

import { ItemRecap, ImageWithFallback } from '@components';
import { Link } from '@navigation';
 import { useTranslate } from '@app/hooks';
import Date from '@assets/images/profile/Date.svg';
import product from '@assets/images/product/product.png';

const CanceledOrderCard = () => {
  const t = useTranslate('Comp_CanceledOrderCard');
  return (
    <div className="border p-3 rounded mb-3 complete-order-card">
      <div className="d-flex justify-content-between border-bottom">
        <div>
          <strong className="order-number d-block">{t('ORDER_NUMBER')}: #123456</strong>
          <div className="d-flex align-items-center">
            <div className="d-flex">
              <ImageWithFallback src={Date} alt="date" width={0} height={0} />
            </div>
            <div>
              <p className="py-0 date">14 ديسمبر 2023</p>
            </div>
          </div>
          <div className=" evaluation my-3"></div>
        </div>

        <div>
          <Link href={'#'} className="d-flex align-items-center bg-gray text-white   rounded-pill deliverd-btn ">
            <p className="px-2 py-0">{t('CANCELED')}</p>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
        </div>
      </div>
      <Row>
        <Col md={6} className="ps-0">
          <ItemRecap
            title={`باتون ساليه شوفان`}
            price={`100ج.م`}
            discount={`120 ج.م`}
            qty={`2`}
            imgSrc={product.src}
            imgAlt="product"
            className="mb-0"
          />
        </Col>
        <Col md={6}>
          <ItemRecap
            title={`باتون ساليه شوفان`}
            price={`100ج.م`}
            discount={`120 ج.م`}
            qty={`2`}
            imgSrc={product.src}
            imgAlt="product"
            className="mb-0"
          />
        </Col>
      </Row>
      <div>
        <div>
          <p className="payment-method pb-0">
            {t('PAYMENT_METHOD')} :Credit card
            {/* {order?.inPayments[0]?.paymentMethod?.typeName} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CanceledOrderCard;
