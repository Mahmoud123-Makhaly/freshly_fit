'use client';

import React from 'react';
import { Col, Row } from 'reactstrap';
import toast from 'react-hot-toast';

import { ButtonMaker } from '@components';
import { useTranslate } from '@app/hooks';

const Subscription = () => {
  const t = useTranslate('COMP_Subscription');
  const handleOnSubscribe = (value: any) => {
    toast.success(t('SUBSCRIBE_SUCCESSFUL'));
  };
  return (
    <div className="subscription p-2 p-lg-5 mb-4">
      <Row className="align-items-center">
        <Col md={4} className="pb-4 pb-lg-0">
          <div className="subscription-info">
            <p className="font-16 fw-bold">{t('JOIN_TO_US')}</p>
            <p className="font-16 fw-bold">{t('OFFER')}</p>
          </div>
        </Col>
        <Col md={8}>
          <form action="" className="subscription-form d-flex">
            <input type="text" placeholder={t('SUBSCRIPTION_PLACEHOLDER')} />
            <ButtonMaker
              block={false}
              text={t('SUBSCRIPTION_BTN')}
              onClick={(e: any) => handleOnSubscribe(e.target.value)}
            />
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Subscription;
