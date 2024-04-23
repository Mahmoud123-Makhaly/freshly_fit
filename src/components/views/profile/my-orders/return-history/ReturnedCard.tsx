'use client';

import React from 'react';
import { Col, Row } from 'reactstrap';

import Date from '@assets/images/profile/Date.svg';
import { useTranslate } from '@app/hooks';
import { ButtonMaker, ItemRecap, ImageWithFallback } from '@components';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
interface IReturnedCard {
  orderNumber: string | number;
  orderDate: string;
  products: Array<{
    title: string;
    img: string | StaticImport;
    price: number;
    discount?: number;
    currency?: string;
    quantity?: number;
  }>;
  seeDetails?: React.Dispatch<React.SetStateAction<number>>;
}

const ReturnedCard = (props: IReturnedCard) => {
  const { orderDate, orderNumber, products, seeDetails } = props;
  const t = useTranslate('Comp_ReturnedCard');

  return (
    <div className="border p-3 rounded mb-3 complete-order-card">
      <Row>
        <Col className="d-flex justify-content-between border-bottom">
          <div>
            <strong className="order-number d-block">
              {t('ORDER_NUMBER')}: {orderNumber}
            </strong>
            <div className="d-flex align-items-center">
              <div className="d-flex">
                <ImageWithFallback src={Date} alt="date" width={0} height={0} />
              </div>
              <div>
                <p className="py-0 date">{orderDate}</p>
              </div>
            </div>
            <div className=" evaluation my-3"></div>
          </div>
          <div>
            <ButtonMaker
              design="d-flex align-items-center bg-gray text-white rounded-pill deliverd-btn "
              onClick={seeDetails}
            >
              <p className="px-2 py-0">{t('DETAILS')}</p>
              <i className="fa-solid fa-chevron-left"></i>
            </ButtonMaker>
          </div>
        </Col>
      </Row>
      <Row>
        {products.map((product, index) => (
          <Col md={6} key={index}>
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

export default ReturnedCard;
