'use client';
import React from 'react';

import { ButtonMaker, ItemRecap, ImageWithFallback } from '@components';
import { Link } from '@navigation';
import { CustomerOrderType } from '@core';
import { useTranslate } from '@app/hooks';
import Date from '@assets/images/profile/Date.svg';
import { Col, Row } from 'reactstrap';
import product from '@assets/images/product/product.png';

interface ICompletedOrderCardProps {
  order?: CustomerOrderType;
  delivered?: boolean;
  setDelivered?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}
const CurrentOrderCard = (props: ICompletedOrderCardProps) => {
  const { order, delivered, setDelivered } = props;
  const t = useTranslate('Comp_CompletedOrderCard');
  return (
    <div className="border p-3 rounded mb-3 complete-order-card">
      <div className="d-flex justify-content-between border-bottom">
        <div>
          <strong className="order-number d-block">
            {t('ORDER_NUMBER')}: #123456
            {/* {order?.number} */}
          </strong>
          <div className="d-flex align-items-center">
            <div className="d-flex">
              <ImageWithFallback src={Date} alt="date" width={0} height={0} />
            </div>
            <div>
              <p className="py-0 date">
                {/* {order?.createdDate}  */}
                14 ديسمبر 2023
              </p>
            </div>
          </div>
          <div className=" evaluation my-3">
            <ButtonMaker block={false} text={t('EVALUATE')} design="bg-transparent text-primary " />
          </div>
        </div>

        <div>
          <Link
            onClick={() => setDelivered!(!delivered)}
            href={'#'}
            className="d-flex align-items-center bg-secondary text-white   rounded-pill deliverd-btn "
          >
            <p className="px-2 py-0">{t('DELIVERED')}</p>
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
        </div>
      </div>
      <Row>
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
          <p className="payment-method">
            {t('PAYMENT_METHOD')} :Credit card
            {/* {order?.inPayments[0]?.paymentMethod?.typeName} */}
          </p>
        </div>

        <div className="product-return">
          <ButtonMaker block={false} text={t('ORDER_RETURN')} design="bg-transparent border-gray" />
        </div>
      </div>
    </div>
  );
};

export default CurrentOrderCard;
