'use client';

import React from 'react';
import { Badge, Card, CardBody, Col, Row } from 'reactstrap';
import Image from 'next/image';

import { useTranslate } from '@app/hooks';
import { Counter, Properties, ButtonMaker, ImageWithFallback } from '@components';
import { LineItemType } from '@core';
import noImg from '@assets/images/product/noimg.svg';
import remove from '@assets/images/icons/shopping-cart/Heart-Outlined.svg';
import gram from '@assets/images/gram.svg';

interface ICartItemProps {
  data: LineItemType | null;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  onDelete: (id: string) => void;
  onSave: (id: string) => void;
}
const CartItem = (props: ICartItemProps) => {
  const { data, count, setCount, onDelete, onSave } = props;
  const propertiesData = [
    {
      imgUrl: gram,
      text: '350 جرام',
      className: 'd-flex align-items-center',
    },
    {
      imgUrl: gram,
      text: 'خالى من دقيق القمح  ',
      className: 'd-flex align-items-center',
    },
    {
      imgUrl: gram,
      text: 'صلاحية 90 يوم',
      className: 'd-flex align-items-center',
    },
  ];
  const t = useTranslate('COMP_CartItem');

  return (
    <Card className="cart-item rounded mb-4">
      <CardBody className="pm-0">
        <Row>
          <Col lg={4} className="ps-0 ">
            <Image
              src={data?.imageUrl ? data.imageUrl : noImg}
              alt="cart-item"
              width={300}
              height={300}
              className="img-fluid rounded"
            />
          </Col>
          <Col lg={8}>
            <div className="d-flex align-items-center justify-content-between my-3 my-lg-0">
              {data?.sku && <Badge color="primary">{t('NEW')}</Badge>}
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-star fa-fw text-primary"></i>
                <i className="fa-solid fa-star fa-fw text-primary"></i>
                <i className="fa-solid fa-star fa-fw text-primary"></i>
                <i className="fa-solid fa-star fa-fw text-primary"></i>
                <i className="fa-solid fa-star fa-fw text-primary"></i>
                <p className="mx-1">5 {t('RATES')}</p>
              </div>
            </div>
            <h5 className="fw-bold my-2"> {data?.name} </h5>
            <h6 className="my-3">
              <span className="fw-bold">{data?.product?.price?.actual?.formattedAmount}</span>
            </h6>
            <hr />
            {data?.product?.description?.content && (
              <div>
                <p>{data?.product?.description?.content}</p>
                <hr />
              </div>
            )}

            <h6>{t('DELIVERY_TIME')}</h6>
            <hr />
            <Properties data={propertiesData} />
          </Col>
        </Row>
        <hr />
        <div className="my-3 d-flex justify-content-between py-0 mt-0 mb-0">
          <div className="d-flex">
            <div className="mx-3 pb-2">
              <ButtonMaker block={false} design="bg-transparent border-0 flex-between" onClick={() => onSave(data!.id)}>
                <i className="fa-regular fa-bookmark pe-1 text-muted"></i>
                <p className="text-muted"> {t('SAVE_FOR_LATER')}</p>
              </ButtonMaker>
            </div>
            <div>
              <ButtonMaker
                block={false}
                design="bg-transparent border-0 flex-between"
                onClick={() => onDelete(data!.id)}
              >
                <ImageWithFallback src={remove} alt={'remove'} />
                <p className="text-muted">{t('DELETE')}</p>
              </ButtonMaker>
            </div>
          </div>
          <div>
            <Counter count={data?.quantity || 1} setCount={setCount} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CartItem;
