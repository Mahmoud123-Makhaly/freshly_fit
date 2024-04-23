'use client';
import React from 'react';
import { Col, Row } from 'reactstrap';
import { BreadCrumb } from '@components';
import { useTranslate } from '@app/hooks';
const ProductDetailsHeader = () => {
  const t = useTranslate('COMP_ProductDetails.Header');
  return (
    <Row>
      <Col className="pt-4 pb-3">{/* <BreadCrumb title={t('BREAD_MAIN')} paths={product?.breadcrumbs} /> */}</Col>
    </Row>
  );
};

export default ProductDetailsHeader;
