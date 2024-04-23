'use client';

import React from 'react';
import { ImageWithFallback } from '@components';

import user from '@assets/images/icons/chechout/fi-rs-user.svg';
import location from '@assets/images/icons/chechout/location.svg';
import phone from '@assets/images/icons/chechout/fi-rs-phone-pause.svg';
import { OrderAddressType } from '@core';

interface IShippingAddressProps {
  data: OrderAddressType;
  children?: React.ReactNode;
  selectInput?: (text: string) => void;
}
const ShippingAddress = (props: IShippingAddressProps) => {
  const { data, children, selectInput } = props;

  return (
    <React.Fragment>
      <div className="border rounded p-2" onClick={() => selectInput!(data.id!)}>
        <div className="flex-between border-bottom mb-3 pb-2">
          <div className="d-flex align-items-center">
            <i className="fa-solid fa-house mx-2"></i>
            <p>{data?.name}</p>
          </div>
          <div className="d-flex  align-items-center pe-2">{children}</div>
        </div>
        <div>
          <div className="border rounded p-3 d-flex my-2  align-items-center">
            <div className="pe-3">
              <ImageWithFallback src={user} alt={'user'} width={0} height={0} />
            </div>
            <p>
              {data?.firstName}
              {data?.lastName}
            </p>
          </div>
          <div className="border rounded p-3 d-flex my-2  align-items-center">
            <div className="pe-3">
              <ImageWithFallback src={location} alt={'location'} width={0} height={0} />
            </div>
            <p>{data?.line1}</p>
          </div>
          <div className="border rounded p-3 d-flex  align-items-center">
            <div className="pe-3">
              <ImageWithFallback src={phone} alt={'phone'} width={0} height={0} />
            </div>
            <p>{data?.phone}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShippingAddress;
