'use client';
import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Rating } from 'primereact/rating';
import { Nullable } from 'primereact/ts-helpers';

import product from '@assets/images/product/product.png';
import { ButtonMaker, Modal, ImageWithFallback } from '@components';
import { useTranslate } from '@app/hooks';

import RatingFeedBackModal from './prouduct-rating/RatingFeedBackModal';
import ProductRatingModal from './prouduct-rating/ProductRatingModal';
import DeliveryRatingModal from './delivery-rating/DeliveryRatingModal';
const RatingCard = () => {
  const t = useTranslate('Comp_Rating_Card');
  const [ratingValue, setRatingValue] = useState<Nullable<number>>(null);
  const [productEvaluate, setProductEvaluate] = useState(false);
  const [deliveryEvaluate, setDeliveryEvaluate] = useState(false);

  const [customerFeedBack, setCustomerFeedBack] = useState(false);

  return (
    <div className="rating-card rounded mb-3">
      <Row>
        <Col md={2} className="ps-0">
          <ImageWithFallback src={product} width={100} height={100} alt="product" />
        </Col>
        <Col md={10} className="pt-2 pt-md-0">
          <p className="m-0 text-14 text-info fw-bold pb-3 pt-0 text-center text-md-start">باتون ساليه شوفان</p>
          <div className="mb-3">
            <Rating value={ratingValue || 0} onChange={e => setRatingValue(e.value)} cancel={false} />
          </div>
          <div className="d-flex justify-content-center justify-content-md-start">
            <ButtonMaker
              onClick={() => setProductEvaluate(true)}
              text={t('PRODUCT_EVALUATE')}
              design="text-primary bg-white"
            >
              <i className="fa-regular fa-pen-to-square mx-1"></i>
            </ButtonMaker>
            <ButtonMaker
              text={t('DELIVERY_EVALUATE')}
              design="text-primary bg-white"
              onClick={() => setDeliveryEvaluate(true)}
            >
              <i className="fa-regular fa-pen-to-square mx-1"></i>
            </ButtonMaker>
          </div>
        </Col>
        <Modal toggleShow={productEvaluate} size="lg">
          <ProductRatingModal setProductEvaluate={setProductEvaluate} setCustomerFeedBack={setCustomerFeedBack} />
        </Modal>
        <Modal toggleShow={customerFeedBack} size="md">
          <RatingFeedBackModal setCustomerFeedBack={setCustomerFeedBack} />
        </Modal>
        <Modal toggleShow={deliveryEvaluate} size="lg">
          <DeliveryRatingModal setDeliveryEvaluate={setDeliveryEvaluate} setCustomerFeedBack={setCustomerFeedBack} />
        </Modal>
      </Row>
    </div>
  );
};

export default RatingCard;
