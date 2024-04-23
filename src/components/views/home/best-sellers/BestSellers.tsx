'use client';

import React from 'react';
import { Col, Row } from 'reactstrap';
import toast from 'react-hot-toast';

import { DTO } from '@tot/core/types';
import { useTranslate } from '@app/hooks';
import { VCardMaker, ButtonMaker } from '@components';
import product from '@assets/images/home/product.svg';

interface BestSellersProps {
  data?: DTO.IProductDTO;
}

const BestSellers = (props: BestSellersProps) => {
  const t = useTranslate('COMP_Best_Sellers');
  const { data } = props;
  const handleAddToCart = () => {
    toast.success(t('ADDED_TO_CART_SUCCESSFUL'));
  };
  return data ? (
    <div className="best-seller">
      {JSON.stringify(product)}
      Best Seller text
      <Row>
        <Col className="pb-3 ">
          <h3 className="fw-bold header">{t('HEADER')}</h3>
        </Col>
      </Row>
      <Row className="p-0 card-row">
        <Col>
          <VCardMaker product={data}>
            <ButtonMaker block={true} text={t('ADD_TO_CART_BTN')} onClick={handleAddToCart} />
          </VCardMaker>
        </Col>
        <Col>
          <VCardMaker product={data}>
            <ButtonMaker block={true} text={t('ADD_TO_CART_BTN')} onClick={handleAddToCart} />
          </VCardMaker>
        </Col>
        <Col>
          <VCardMaker product={data}>
            <ButtonMaker block={true} text={t('ADD_TO_CART_BTN')} onClick={handleAddToCart} />
          </VCardMaker>
        </Col>
        <Col>
          <VCardMaker product={data}>
            <ButtonMaker block={true} text={t('ADD_TO_CART_BTN')} onClick={handleAddToCart} />
          </VCardMaker>
        </Col>
        <Col>
          <VCardMaker product={data}>
            <ButtonMaker block={true} text={t('ADD_TO_CART_BTN')} onClick={handleAddToCart} />
          </VCardMaker>
        </Col>
      </Row>
    </div>
  ) : null;
};

export default BestSellers;
