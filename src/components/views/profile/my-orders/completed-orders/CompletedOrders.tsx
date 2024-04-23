'use client';

import React, { useState } from 'react';

import { CustomerOrderType } from '@core';

import CompletedOrderCard from './CompletedOrderCard';
import OrderHistory from '../OrderHistory';
interface ICompletedOrdersProps {
  orders: Array<CustomerOrderType> | undefined;
  setDelivered: React.Dispatch<React.SetStateAction<boolean>>;
  delivered: boolean;
  setShowOrderReturn: React.Dispatch<React.SetStateAction<boolean>>;
}
const CompletedOrders = (props: ICompletedOrdersProps) => {
  const { orders, setDelivered, delivered, setShowOrderReturn } = props;
  const [productRating, setProductRating] = useState(true);
  return productRating ? (
    <div>
      <CompletedOrderCard
        productRating={productRating}
        setProductRating={setProductRating}
        setDelivered={setDelivered}
        delivered={delivered}
        setShowOrderReturn={setShowOrderReturn}
      />
      <CompletedOrderCard
        productRating={productRating}
        setProductRating={setProductRating}
        setDelivered={setDelivered}
        delivered={delivered}
        setShowOrderReturn={setShowOrderReturn}
      />
      <CompletedOrderCard
        productRating={productRating}
        setProductRating={setProductRating}
        setDelivered={setDelivered}
        delivered={delivered}
        setShowOrderReturn={setShowOrderReturn}
      />
      <CompletedOrderCard
        productRating={productRating}
        setProductRating={setProductRating}
        setDelivered={setDelivered}
        delivered={delivered}
        setShowOrderReturn={setShowOrderReturn}
      />
      {/* {orders?.map((order, index) => <CompletedOrderCard key={index} order={order} />)} */}
    </div>
  ) : (
    <>
      <OrderHistory />
    </>
  );
};

export default CompletedOrders;
