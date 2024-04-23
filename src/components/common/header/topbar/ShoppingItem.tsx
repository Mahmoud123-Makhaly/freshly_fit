'use client';

import React, { useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { useTranslate } from '@app/hooks';
import { Counter, ImageWithFallback } from '@components';

interface IShoppingItemProps {
  imgUrl: StaticImport | string;
  weight?: string;
  title?: string;
  price?: string;
  onDelete: () => void;
}
const ShoppingItem = (props: IShoppingItemProps) => {
  const { imgUrl, weight, title, price, onDelete } = props;
  const [count, setCount] = useState(0);
  const t = useTranslate('COMP_TopBar.COMP_ShoppingItem');

  return (
    <div className="shopping-item p-3 border rounded">
      <div className="shopping-item-info flex-between align-items-start">
        <ImageWithFallback src={imgUrl} alt="bread" width={100} height={100} className="flex-flex-grow-1" />
        <div className="flex-col flex-grow-2 pe-4">
          <span className="product-name d-block">{title} </span>
          {weight && <span className="product-weight d-block"> {weight} </span>}
        </div>

        <p className="prodcut-price pt-0 flex-grow-1 text-flex-nowrap text-end">{price}</p>
      </div>
      <div className="shopping-item-control flex-between">
        <Counter count={count} setCount={setCount} />
        <p className="m-0 delete">
          <i className="fa-regular fa-trash-can icon" onClick={onDelete}></i> {t('DELETE')}
        </p>
      </div>
    </div>
  );
};

export default ShoppingItem;
