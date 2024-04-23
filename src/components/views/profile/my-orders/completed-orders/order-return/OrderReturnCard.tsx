import React from 'react';
import { CardBody, Row, Col } from 'reactstrap';

import { useTranslate } from '@app/hooks';
import { ImageMaker } from '@components';
import recapImg from '@assets/images/product/recapImg.png';


interface IOrderReturnCard {
  setToggleButton?: React.Dispatch<React.SetStateAction<boolean>>;
}
const OrderReturnCard = (props: IOrderReturnCard) => {
  const { setToggleButton } = props;
  const t = useTranslate('Comp_Order_Return.Comp_Order_Return_Card');
  return (
    <div className="order-return-card rounded  ">
      <CardBody className="item__recap">
        <Row className="align-items-center align-items-md-center ">
          <Col className="col-4 col-md-2 col-xl-1 ps-0">
            <div className="order-return-img">
              <ImageMaker src={recapImg.src} alt={'product'} ratio="square" width={0} height={0} design="rounded" />
              <input type="checkbox" />
            </div>
          </Col>
          <Col className="col-8 col-md-10 col-xl-11">
            <div className="flex-col-start   order-details">
              <p className="text-14 fw-bold text-info">باتون ساليه شوفان</p>
              <p className="text-info  weight">350 جرام</p>
              <div className="flex-between flex-wrap">
                <div className="flex-between w-100 flex-column flex-md-row align-items-start ">
                  <div className="flex-between order-price">
                    <del className="discount">120 ج.م</del>
                    <p className="text-primary px-2 price">100ج.م</p>
                  </div>

                  <p className="text-end text-gray"> {t('QUANTITY')} : 1</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
      <p className="text-14 fw-bold p-0 my-3"> {t('RETURN_REASON')}</p>
      <input
        type="text"
        placeholder={t('RETURN_REASON')}
        className="rounded"
        onChange={() => setToggleButton!(false)}
      />
    </div>
  );
};

export default OrderReturnCard;
