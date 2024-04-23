'use client';

import React from 'react';
import { Col, Row } from 'reactstrap';

import { ImageWithFallback } from '@components';
import { useTranslate } from '@app/hooks';
import health1 from '@assets/images/home/healty-card/health1.svg';
import health2 from '@assets/images/home/healty-card/health2.svg';

const HealthyCard = () => {
  const t = useTranslate('COMP_HomePage');
  const lightText = [t('BETTER_HEALTH')];
  const darkText = [t('PRODUCTS'), t('NATURAL'), '100%'];

  return (
    <Row>
      <Col lg={6} className="px-0 pe-lg-3 better-health">
        <Row className={` rounded bg-primary d-flex align-items-center h-100 py-2 py-lg-0 px-2 px-md-5`}>
          <Col className="col-3 col-6 p-3 p-lg-4">
            <div className="square-ratio" style={{ backgroundImage: `url("${health1.src}")` }}>
              <ImageWithFallback src={health1.src} alt="health1-img" className="d-none" width={0} height={0} />
            </div>
          </Col>
          <Col className="col-9 col-lg-6 flex-col-center px-0 w-50 ">
            {lightText?.map((item, index) => (
              <h1 className="text-white text-center m-0 py-1 fw-bold" key={index}>
                {item}
              </h1>
            ))}
          </Col>
        </Row>
      </Col>
      <Col lg={6} className="px-0 ps-lg-3">
        <Row className={` rounded bg-secondary d-flex align-items-center h-100 py-2 py-lg-0 px-2 px-md-5`}>
          <Col className="col-3 col-6 p-3 p-lg-4">
            <div className="square-ratio" style={{ backgroundImage: `url("${health2.src}")` }}>
              <ImageWithFallback src={health2.src} alt="health1-img" className="d-none" width={0} height={0} />
            </div>
          </Col>
          <Col className="col-9 col-lg-6 flex-col-center px-0 w-50 ">
            {darkText?.map((item, index) => (
              <h1 className="text-white text-center m-0 py-1 fw-bold" key={index}>
                {item}
              </h1>
            ))}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HealthyCard;
