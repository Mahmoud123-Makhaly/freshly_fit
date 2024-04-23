'use client';

import React  from 'react';

import { CustomerOrderType } from '@core';

 import CurrentOrderCard from './CurrentOrderCard';

interface ICurrentOrdersProps {
  orders: Array<CustomerOrderType> | undefined;
  setDelivered: React.Dispatch<React.SetStateAction<boolean>>;
  delivered: boolean;
}
const CurrentOrders = (props: ICurrentOrdersProps) => {
  const { orders, setDelivered, delivered } = props;
  return (
    <div>
      <CurrentOrderCard delivered={delivered} setDelivered={setDelivered} />
      <CurrentOrderCard delivered={delivered} setDelivered={setDelivered} />
      <CurrentOrderCard delivered={delivered} setDelivered={setDelivered} />
      <CurrentOrderCard delivered={delivered} setDelivered={setDelivered} />
    </div>
  );
};

export default CurrentOrders;
