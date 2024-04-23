'use client';

import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { ButtonMaker } from '@components';
import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';
interface IRecipeProps {
  imgUrl?: string | StaticImport;
  title?: string;
  description?: string;
  calories?: string;
  time?: string;
  btnText?: string;
  slug: string;
  onClick?: () => void;
}
const RecipeItem = (props: IRecipeProps) => {
  const { imgUrl, title, description, calories, time, btnText, slug, onClick } = props;
  const t = useTranslate('Comp_Recipe');
  return (
    <Row className="py-2 my-3 recipe-card">
      <Col lg={7} className="p-0">
        <div style={{ backgroundImage: `url(${imgUrl})` }}>
          <Image src={imgUrl ? imgUrl : ''} alt={'recipe'} width={0} height={0} />
        </div>
      </Col>
      <Col className="recipe-content" lg={5}>
        <h2 className="p-2 fw-bold recipe-content-title">{title}</h2>
        <p className="recipe-content-desc">{description}</p>
        <div className="d-flex justify-content-between py-3  calories">
          <strong> {calories} </strong>
          <strong> {time} </strong>
        </div>
        <div className="text-center">
          <Link href={slug}>
            <ButtonMaker block={true} text={btnText} design="p-2 w-50" onClick={onClick} />
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default RecipeItem;
