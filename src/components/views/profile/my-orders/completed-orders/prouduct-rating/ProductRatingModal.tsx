'use client';

import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import { Rating } from 'primereact/rating';
import { Nullable } from 'primereact/ts-helpers';
import * as Yup from 'yup';

import product from '@assets/images/product/product.png';
import { FormFieldType, ImageWithFallback } from '@components';
import { useTranslate } from '@app/hooks';

import ProductEvaluationForm from './ProductRatingForm';

interface IProductEvaluationProps {
  setProductEvaluate: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomerFeedBack: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProductRatingModal = (props: IProductEvaluationProps) => {
  const { setProductEvaluate, setCustomerFeedBack } = props;
  const [ratingValue, setRatingValue] = useState<Nullable<number>>(null);
  const t = useTranslate('COMP_Product_Evaluation');
  const formFields: Array<FormFieldType> = [
    {
      name: 'subject',
      label: t('WHRITE_PRODUCT_EVALUATION'),
      type: 'textarea',
      placeholder: t('EXEPERIENCE_INQUIRY'),
    },
  ];
  const onSubmit = (values: any) => {
    setProductEvaluate(false);
    setCustomerFeedBack(true);
  };
  const validationSchema = Yup.object().shape({
    subject: Yup.string().required(t('REQUIRED_EVALUATION')),
  });

  return (
    <div className="product-evaluate">
      <div className="text-end">
        <i className="fa-solid fa-xmark close-icon text-gray" onClick={() => setProductEvaluate(false)}></i>
      </div>
      <div className="product-info">
        <Row>
          <Col md={2}>
            <ImageWithFallback src={product} width={100} height={0} alt="product" />
          </Col>
          <Col md={10}>
            <p className="text-info text-14 fw-bold product-name">باتون ساليه شوفان</p>
            <p className="text-primary text-14 fw-bold product-price mb-2"> 100 ج.م </p>

            <Rating value={ratingValue || 0} onChange={e => setRatingValue(e.value)} cancel={false} />
          </Col>
        </Row>
        <ProductEvaluationForm
          initialValues={{
            subject: '',
          }}
          validationSchema={validationSchema}
          fields={formFields}
          buttonText={t('SEND')}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default ProductRatingModal;
