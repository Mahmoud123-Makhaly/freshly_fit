'use client';

import React from 'react';
import { Col, Row } from 'reactstrap';

import { ButtonMaker, ImageMaker } from '@components';
import { useTranslate } from '@app/hooks';
interface IRecipeModalProps {
  imgUrl: string;
  title: string;
  description: string;
  calories: string;
  onClick: () => void;
  time: string;
  wayDescririon: string;
  ingredientsContents: Array<string>;
}
const RecipeModal = (props: IRecipeModalProps) => {
  const { imgUrl, title, description, calories, onClick, time, wayDescririon, ingredientsContents } = props;
  const t = useTranslate('Comp_Recipe_Modal');
  return (
    <div className="recipe_modal">
      <p className="text-end  p-0">
        <i className="fa-solid fa-xmark close-icon text-start" onClick={onClick}></i>
      </p>
      <Row className="modal-img">
        <Col lg={6} className="ps-0">
          <ImageMaker src={imgUrl} alt="recipe" ratio="cinemascope" width={0} height={0} />
        </Col>
        <Col lg={6}>
          <div className="modal-info text-center text-lg-start">
            <h4 className="m-0  title">{title}</h4>
            <p className="description d-block d-lg-none">{description}</p>
            <div className="time-calories">
              <p className="m-0  calories">{calories}</p>
              <p className="m-0  time"> {time}</p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="ingredients">
        <h5 className="ingredients-title">{t('INGREDIENTS')}</h5>
        <ul className="d-flex ingredients-list">
          {ingredientsContents.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
      </div>
      <div className="way">
        <h5 className="way-title">{t('THE_WAY')}</h5>
        <p className="way-desc">{wayDescririon}</p>
        <ButtonMaker text={t('FOLLOE_THE_REST_OF_RECIPE')} onClick={onClick} />
      </div>
    </div>
  );
};

export default RecipeModal;
