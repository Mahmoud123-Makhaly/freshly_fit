import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import noImg from '@assets/images/product/noimg.svg';
import { ImageMaker } from '@components';
import { useTranslate } from '@app/hooks';

interface ItemRecapProps {
  imgSrc?: string | StaticImport;
  imgAlt?: string;
  title: string | undefined;
  description?: string | undefined;
  price: string | number | undefined;
  qty?: number | string;
  discount?: string | number;
  discountPercentage?: number;
  className?: string;
}
const ItemRecap = (props: ItemRecapProps) => {
  const { imgSrc, imgAlt, title, description, discount, discountPercentage, price, qty, className } = props;
  const t = useTranslate('Comp_Item_Recap');
  return (
    <Card className={`my-3 ${className}`}>
      <CardBody
        className="py-3
      "
      >
        <Row className="align-items-center gap-column-3">
          <Col className="col-5 col-md-4">
            <ImageMaker
              src={imgSrc ? imgSrc : noImg.src}
              alt={imgAlt ?? title ?? 'product'}
              ratio="square"
              width={600}
              height={600}
              design="rounded"
            />
          </Col>
          <Col className="col-7 col-md-8">
            <div className="flex-col-start  order-details">
              <p className="order-title">{title}</p>
              <p>{description}</p>
              <div className="flex-between">
                <div className="flex-between w-100">
                  <div className="flex-between order-price">
                    <del className="discount">{discount || discountPercentage}</del>
                    <p className="text-primary px-2 price">{price}ج.م</p>
                  </div>
                  {qty && (
                    <p className="text-end text-muted">
                      {t('QUANTITY')} : {qty}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ItemRecap;
