'use client ';

import React, { useState } from 'react';
import { Badge } from 'reactstrap';

import { useTranslate } from '@app/hooks';
import { OrderAddressType } from '@core';
import { ShippmentDetails, ShippingAddress, ButtonMaker, CartSummary, ICartSummaryDataProps } from '@components';

interface IRecoveryDetails {
  setViewReturns: React.Dispatch<React.SetStateAction<boolean>>;
}
const RecoveryDetails = (props: IRecoveryDetails) => {
  const { setViewReturns } = props;
  const t = useTranslate('Comp_Recovery_Details');
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [toggleButton, setToggleButton] = useState(true);
  const handleSelectDay = (day: any) => {
    setSelectedDay(day);
    setToggleButton(false);
  };
  const handleSelectTime = (hour: any) => {
    setSelectedHour(hour);
    setToggleButton(false);
  };
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
  const calendarDays = [
    { dayNumber: '10/12', dayName: t('SUNDAY') },
    { dayNumber: '10/13', dayName: t('MONDAY') },
    { dayNumber: '10/14', dayName: t('TUESDAY') },
  ];
  const calendarTime = [
    { hour: '08:10', period: t('MORNING') },
    { hour: '10:12', period: t('MORNING') },
    { hour: '08:10', period: t('EVENING') },
    { hour: '08:10', period: t('EVENING') },
  ];
  return (
    <div className="recovery-details">
      <h3 className="recovery-details-title rounded  ">{t('RECOVEY_DETAILS')}</h3>
      <div className="calendar">
        <div className="calendar-day pb-3">
          <h4 className="font-18 fw-bold text-info select-day">{t('SELECT_DAY')}</h4>

          {calendarDays.map((item, index) => {
            return (
              <ButtonMaker
                key={index}
                onClick={() => handleSelectDay(index + 1)}
                design={`calendar-btn ${selectedDay === index + 1 ? 'active' : ''}`}
              >
                <span className="d-block text-info text-12 date date-text">{item.dayNumber}</span>
                <span className="d-block text-info text-12 date-text">{item.dayName}</span>
              </ButtonMaker>
            );
          })}
        </div>
        <div className="caelndar-time pb-3">
          <h4 className="font-18 fw-bold text-info select-day">{t('SELECT_TIMING')}</h4>

          {calendarTime.map((item, index) => (
            <ButtonMaker
              key={index}
              onClick={() => handleSelectTime(index + 1)}
              design={`calendar-btn ${selectedHour === index + 1 ? 'active' : ''}`}
            >
              <span className="d-block text-info text-12 date date-text">{item.hour}</span>
              <span className="d-block text-info text-12 date-text">{item.period}</span>
            </ButtonMaker>
          ))}
        </div>
      </div>
      <div className="shippment-details   rounded my-3">
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
        text={t('RECOVERY_CONFIRMATION')}
        block
        disabled={toggleButton}
        design="recovery-confirm"
        onClick={() => setViewReturns(false)}
      />
    </div>
  );
};

export default RecoveryDetails;
