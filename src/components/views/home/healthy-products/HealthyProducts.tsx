'use client';

import React from 'react';
import { Col, Row } from 'reactstrap';

import { useTranslate } from '@app/hooks';
import { DTO } from '@tot/core/types';
import product1 from '@assets/images/home/healthy-product/product1.png';
import product2 from '@assets/images/home/healthy-product/product2.png';
import product3 from '@assets/images/home/healthy-product/product3.png';
import product4 from '@assets/images/home/healthy-product/product4.png';
import product5 from '@assets/images/home/healthy-product/product5.png';
import product6 from '@assets/images/home/healthy-product/product6.png';

import DetailsInfo from './DetailsInfo';
import Figure from './Figure';

const HealthyProducts = ({ products }: { products: Array<DTO.IProductDTO> }) => {
  const t = useTranslate('COMP_HealthyProducts');
  return (
    <Row className="p-0">
      <Col lg={4} className="mt-3">
        <DetailsInfo />
      </Col>
      <Col lg={8} className="pe-md-0 px-0">
        <Row className="p-0">
          {products.map(product => (
            <Col key={product.id} md={4} className="figure col-6">
              <Figure
                href={`/product/${product.slug}`}
                text={product.name}
                alt={product.seoInfo?.imageAltDescription ?? product.name}
                imgSrc={product.imgSrc}
                width="100%"
                height="100%"
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default HealthyProducts;
