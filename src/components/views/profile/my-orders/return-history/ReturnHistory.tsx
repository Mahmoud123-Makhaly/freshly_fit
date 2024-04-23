import React, { useState } from 'react';
import ReturnedCard from './ReturnedCard';
import product from '@assets/images/product/product.png';
import ReturnDetails from './ReturnDetails';
import { Nullable } from 'primereact/ts-helpers';
const ReturnHistory = () => {
  const [details, setDetails] = useState<Nullable<number>>(null);
  const returnItems = [
    {
      ordernumber: 123,
      orderDate: '14 December 2023',
      products: [
        { title: 'باتون ساليه شوفان', img: product.src, price: 100, discount: 120, currency: 'ج.م', quantity: 2 },
        { title: 'باتون ساليه شوفان', img: product.src, price: 100, discount: 120, currency: 'ج.م', quantity: 2 },
      ],
    },
    {
      ordernumber: 456,
      orderDate: '14 December 2023',
      products: [
        { title: 'باتون ساليه شوفان', img: product.src, price: 100, discount: 120, currency: 'ج.م', quantity: 2 },
        { title: 'باتون ساليه شوفان', img: product.src, price: 100, discount: 120, currency: 'ج.م', quantity: 2 },
      ],
    },
    {
      ordernumber: 789,
      orderDate: '14 December 2023',
      products: [
        { title: 'باتون ساليه شوفان', img: product.src, price: 100, discount: 120, currency: 'ج.م', quantity: 2 },
        { title: 'باتون ساليه شوفان', img: product.src, price: 100, discount: 120, currency: 'ج.م', quantity: 2 },
      ],
    },
  ];
  return (
    <React.Fragment>
      {details === null ? (
        returnItems.map((item, index) => (
          <ReturnedCard
            key={index}
            orderDate={item.orderDate}
            orderNumber={item.ordernumber}
            products={item.products}
            seeDetails={() => setDetails(index)}
          />
        ))
      ) : (
        <ReturnDetails products={returnItems[details!].products} />
      )}
    </React.Fragment>
  );
};

export default ReturnHistory;
