import React from 'react';
import { CardBody, Row, Col } from 'reactstrap';

import { ImageMaker } from '@components';
import recapImg from '@assets/images/product/recapImg.png';
import { useTranslate } from '@app/hooks';

const ViewReturnsCard = () => {
  const t = useTranslate('Comp_View_Returns_Card');
  return (
    <div className="view-return-card rounded  ">
      <CardBody className="item__recap">
        <Row className="align-items-center align-items-md-center ">
          <Col className="col-4 col-md-2 col-xl-1 ps-0">
            <div className="view-return-img">
              <ImageMaker src={recapImg.src} alt={'product'} ratio="square" width={0} height={0} design="rounded" />
            </div>
          </Col>
          <Col className="col-8 col-md-10 col-xl-11">
            <div className="flex-col-start   view-details">
              <p className="text-14 fw-bold text-info">باتون ساليه شوفان</p>
              <p className="text-info  weight">350 جرام</p>
              <div className="flex-between">
                <div className="flex-between w-100 flex-column flex-md-row align-items-start ">
                  <div className="flex-between view-price">
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
      <div className="return-reason rounded text-info font-14">
        كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف
        بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف
      </div>
    </div>
  );
};

export default ViewReturnsCard;
