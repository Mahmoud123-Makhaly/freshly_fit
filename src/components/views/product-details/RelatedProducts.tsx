'use client';
import React from 'react';
import { Col, Row } from 'reactstrap';
import { ButtonMaker, JsonLd, VCardMaker } from '@components';
import { DTO } from '@tot/core/types';
import { useTranslate } from '@app/hooks';
const RelatedProducts = ({ products }: { products: Array<DTO.IProductAssociationDTO> }) => {
  const t = useTranslate('COMP_ProductDetails.RelatedProducts');

  return (
    <section>
      <Row>
        <Col>
          <div>
            <h1 className="py-3 font-24 fw-bold">{t('SIMILAR_PRODUCTS')}</h1>
          </div>
        </Col>
        <Row className="card-row">
          {products?.map((item, index) => (
            <React.Fragment key={`product-details-v-card-${index}`}>
              {item.product && (
                <React.Fragment>
                  <Col>
                    {item.product?.JsonLd && <JsonLd html={item.product.JsonLd} />}
                    <VCardMaker product={item.product}>
                      <ButtonMaker block={true} text={t('ADD_TO_CART_BTN')} />
                    </VCardMaker>
                  </Col>
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </Row>
      </Row>
    </section>
  );
};

export default RelatedProducts;
