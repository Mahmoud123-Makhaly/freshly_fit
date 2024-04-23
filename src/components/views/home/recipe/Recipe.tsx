'use client';

import React from 'react';
import { Col, Row } from 'reactstrap';

import { ButtonMaker, ImageWithFallback } from '@components';
import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';
import recipe from '@assets/images/home/recipe.png';

const Recipe = () => {
  const t = useTranslate('COMP_HomePage');

  return (
    <Row className={`py-2 my-3 recipe-card home-recipe`}>
      <Col lg={7} className="p-0">
        <div style={{ backgroundImage: `url(${recipe})` }}>
          <ImageWithFallback src={recipe} alt={'recipe'} width={0} height={0} />
        </div>
      </Col>
      <Col className="recipe-content" lg={5}>
        <h2 className="p-2 fw-bold recipe-content-title">{t('TITLE')}</h2>
        <p className="recipe-content-desc">{t('DESCRIPTION')}</p>
        <div className="d-flex justify-content-between py-3  calories">
          <strong> {t('CALORIES')} </strong>
          <strong> {t('TIME')} </strong>
        </div>
        <div className="text-center">
          <Link href="/coming-soon">
            <ButtonMaker block={true} text={t('SEE_REST_RECIPES')} design="p-2 w-50" />
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default Recipe;
