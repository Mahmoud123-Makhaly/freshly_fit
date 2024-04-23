import React, { useState } from 'react';
import { Badge } from 'reactstrap';

import { useTranslate } from '@app/hooks';
import { OrderAddressType } from '@core';
import { ShippmentDetails, ShippingAddress, CartSummary, ICartSummaryDataProps, ButtonMaker } from '@components';

import OrderReturnCard from './OrderReturnCard';
interface IOrderReturn {
  showRecoveryDetails: React.Dispatch<React.SetStateAction<boolean>>;
}
const OrderReturn = (props: IOrderReturn) => {
  const { showRecoveryDetails } = props;
  const t = useTranslate('Comp_Order_Return');
  const [toggleButton, setToggleButton] = useState(true);
  const shippingAddresses: Array<OrderAddressType> = [
    {
      id: 'a123',
      name: 'المنزل',
      firstName: 'محمد',
      lastName: 'علي',
      line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
      phone: '010085412714',
    },
    {
      id: 'b123',
      name: 'العمل',
      firstName: 'محمد',
      lastName: 'علي',
      line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
      phone: '010085412714',
    },
    {
      id: 'c123',
      name: 'المنزل',
      firstName: 'محمد',
      lastName: 'علي',
      line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
      phone: '010085412714',
    },
  ];
  const TableData: Array<ICartSummaryDataProps> = [
    { text: t('SUBTOTAL'), price: 30 },
    { text: t('DELIVERY_FEES'), price: 20 },
    { text: t('TOTAL'), price: 261 },
  ];
  return (
    <div className="order-return">
      <h3 className="text-24 text-info order-return-title rounded">{t('ORDRE_RETURN')}</h3>
      <OrderReturnCard setToggleButton={setToggleButton} />
      <OrderReturnCard setToggleButton={setToggleButton} />
      <div className="shippment-details   rounded mb-3">
        <h5 className="shippment-title mb-0"> {t('SHIPPING_DETAILS')}</h5>
        <div className="shippment-info">
          <div className="mb-3 shipping-info-card">
            <ShippmentDetails />
          </div>
          <ShippingAddress data={shippingAddresses[0]} />
        </div>
      </div>
      <div className="order-summary rounded mb-3">
        <h5 className="order-summary-title mb-0 flex-between">
          <p className="pill"> {t('BILL')}</p>
          <Badge color="primary" className="rounded-pill badge">
            {t('CASH')}
          </Badge>
        </h5>
        <div className="order-summary-info">
          <CartSummary title={t('CART_SUMMARY')} data={TableData} />
        </div>
      </div>
      <ButtonMaker
        text={t('RETURN_CONFIRMATION')}
        block
        disabled={toggleButton}
        onClick={() => showRecoveryDetails(false)}
      />
    </div>
  );
};

export default OrderReturn;
