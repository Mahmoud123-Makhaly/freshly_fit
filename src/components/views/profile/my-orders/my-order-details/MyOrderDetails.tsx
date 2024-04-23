'use client';

import React, { useState } from 'react';
import { Badge, Row } from 'reactstrap';

import { ImageWithFallback } from '@components';
import check from '@assets/images/profile/check.svg';
import vector from '@assets/images/profile/Vector.svg';
import { useTranslate } from '@app/hooks';

import {
  ButtonMaker,
  ItemRecap,
  CartSummary,
  ShippmentDetails,
  ICartSummaryDataProps,
  ShippingAddress,
  Modal,
} from '@components';
import cancel from '@assets/images/profile/cancel.svg';

import product from '@assets/images/product/product.png';
import { OrderAddressType } from '@core';

import ProgressBar from './ProgressBar';

const MyOrderDetails = () => {
  const t = useTranslate('Comp_OrderDetails');
  const [orderStatus, setOrderStatus] = useState(0);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const TableData: Array<ICartSummaryDataProps> = [
    { text: t('SUBTOTAL'), price: 30 },
    { text: t('DELIVERY_FEES'), price: 20 },
    { text: t('TOTAL'), price: 261 },
  ];
  const shippingAddresses: Array<OrderAddressType> = [
    {
      id: 'a123',
      name: 'المنزل',
      firstName: 'محمد',
      lastName: 'علي',
      line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
      phone: '010085412714',
    },
    {
      id: 'b123',
      name: 'العمل',
      firstName: 'محمد',
      lastName: 'علي',
      line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
      phone: '010085412714',
    },
    {
      id: 'c123',
      name: 'المنزل',
      firstName: 'محمد',
      lastName: 'علي',
      line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
      phone: '010085412714',
    },
  ];
  const cancelOrder = () => {
    setShowCancelModal(true);
  };
  return (
    <div className="my-order-details">
      {orderStatus == 100 && (
        <div className="order-confirm text-center">
          <ImageWithFallback src={check} alt="check" width={0} height={0} />
          <h3 className="order-confirm-title text-24 text-info"> {t('DELIVERED_SUCCESS')}</h3>
        </div>
      )}
      <h5 className="title text-24  rounded"> {t('ORDER_DETAILS')}</h5>
      <div className="order-process rounded">
        <h6 className="order-process-title flex-between m-0">
          <span className="order-number text-14 text-info">{t('ORDER_NUMBER')} :1234</span>
          {orderStatus == 0 && (
            <ButtonMaker block={false} text={t('CANCEL_ORDER')} design="text-primary bg-white" onClick={cancelOrder} />
          )}
          {orderStatus == 100 && <ButtonMaker block={false} text={t('ORDER_RETURN')} design="text-primary bg-white" />}
        </h6>
        <div className="order-process-info p-3">
          <div className="preparing-title flex-between">
            {orderStatus == 0 && <ButtonMaker block={false} text={t('PREPARING')} design="bg-primary rounded-pill" />}
            {orderStatus == 25 && (
              <ButtonMaker block={false} text={t('ON_THE_ROAD')} design="bg-primary rounded-pill" />
            )}
            {orderStatus == 50 && <ButtonMaker block={false} text={t('DELIVERED')} design="bg-primary rounded-pill" />}
            {orderStatus == 75 && (
              <ButtonMaker block={false} text={t('OUT_FOR_DELIVERY')} design="bg-primary rounded-pill" />
            )}
            {orderStatus == 100 && <ButtonMaker block={false} text={t('DELIVERED')} design="bg-primary rounded-pill" />}
            {orderStatus === 0 && (
              <p className="cancel-order text-gray text-14 d-flex align-items-center">
                <ImageWithFallback src={vector} alt="vector" width={0} height={0} />
                {t('CANCEL_MSG')}
              </p>
            )}
          </div>
        </div>
        <div className="progress-container mb-3 d-flex flex-column">
          <ProgressBar orderStatus={orderStatus} />
        </div>

        <Row className="px-3">
          <ItemRecap
            title={`باتون ساليه شوفان`}
            price={`100ج.م`}
            discount={`120 ج.م`}
            qty={`2`}
            imgSrc={product.src}
            imgAlt="product"
            description="350 جرام"
          />
        </Row>
        <Row className="px-3">
          <ItemRecap
            title={`باتون ساليه شوفان`}
            price={`100ج.م`}
            discount={`120 ج.م`}
            qty={`2`}
            imgSrc={product.src}
            imgAlt="product"
            description="350 جرام"
          />
        </Row>
      </div>
      <div className="shippment-details   rounded mb-3">
        <h5 className="shippment-title mb-0"> {t('SHIPPING_DETAILS')}</h5>
        <div className="shippment-info">
          <div className="mb-3 shipping-info-card">
            <ShippmentDetails />
          </div>
          <ShippingAddress data={shippingAddresses[0]} />
        </div>
      </div>

      <div className="order-summary rounded mb-4">
        <h5 className="order-summary-title mb-0 flex-between">
          <p className="pill"> {t('BILL')}</p>
          <Badge color="primary" className="rounded-pill badge">
            {t('CASH')}
          </Badge>
        </h5>
        <div className="order-summary-info">
          <CartSummary title={t('CART_SUMMARY')} data={TableData} />
        </div>
      </div>
      <Modal toggleShow={showCancelModal} size="sm">
        <div className="cancel-order-modal">
          <div className="text-end">
            <i className="fa-solid fa-xmark close-icon text-gray" onClick={() => setShowCancelModal(false)}></i>
          </div>
          <div className="text-center pt-3">
            <ImageWithFallback src={cancel} width={0} height={0} alt="cancel" />
            <h4 className="cancel-title  "> {t('CANCEL_ORDER')} </h4>
            <p className="cancel-inquiry">{t('CANCEL_INQUIRY')}</p>
            <Row>
              <ButtonMaker text={t('YES')} block={false} design="bg-danger me-3" />

              <ButtonMaker text={t('NO')} block={false} outline onClick={() => setShowCancelModal(false)} />
            </Row>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyOrderDetails;
