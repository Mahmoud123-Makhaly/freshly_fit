'use client';

import React from 'react';
import { Card, CardBody } from 'reactstrap';

import { ICartSummaryDataProps } from './ICartSummaryDataProps';

interface ICartSummaryProps {
  title: string;
  data: Array<ICartSummaryDataProps>;
  onClick?: () => void;
  children?: React.ReactNode;
}
const CartSummary = (props: ICartSummaryProps) => {
  const { data, title, children } = props;

  return (
    <div className="cart-summary">
      <Card>
        <h6 className="card-title mb-0 fw-bold px-4 mt-3"> {title}</h6>
        <CardBody className="pt-2">
          <table className="table table-borderless mb-0">
            <tbody>
              {data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.text}</td>
                    <td className="text-end w-50">{item?.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      {children}
    </div>
  );
};

export default CartSummary;
