'use client';

import React from 'react';

import { ImageWithFallback } from '@components';

import { PropertiesType } from './PropertiesType';
interface PropertiesProps {
  data: Array<PropertiesType>;
}
const Properties = (props: PropertiesProps) => {
  const { data } = props;
  return (
    <div className="d-flex justify-content-between align-items-center flex-wrap properties">
      {data?.map((prop, index) => (
        <div key={index} className={prop.className ? prop.className : 'd-flex align-items-center text-info'}>
          <ImageWithFallback src={prop.imgUrl} alt={prop.text || ''} width={0} height={0} />
          <p className="mx-3 my-auto   properties-text">{prop.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Properties;
