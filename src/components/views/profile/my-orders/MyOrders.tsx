'use client';

import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchForm, HTabs, MyOrderDetails } from '@components';
import { getCurrentOrders } from '@utils';
import { CustomerOrderConnection } from '@core';
import { useTranslate } from '@app/hooks';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { CurrentOrders } from './current-orders';
import { CompletedOrders } from './completed-orders';
import CanceledOrders from './canceled-orders/CanceledOrders';
import OrderReturn from './completed-orders/order-return/OrderReturn';
import RecoveryDetails from './completed-orders/order-return/RecoveryDetails';
import ViewReturns from './completed-orders/order-return/ViewReturns';
import ReturnInvoice from './completed-orders/order-return/ReturnInvoice';
import ReturnHistory from './return-history/ReturnHistory';

const MyOrders = () => {
  const [orders, setOrders] = useState<CustomerOrderConnection | undefined>();
  const [showOrderReturn, setShowOrderReturn] = useState(true);
  const [showRecoveryDetails, setShowRecoveryDetails] = useState(true);
  const [showReturnInvoice, setShowReturnInvoice] = useState(true);
  const [viewReturns, setViewReturns] = useState(true);
  const currentOrder = getCurrentOrders();
  const [delivered, setDelivered] = useState(true);

  const t = useTranslate('Comp_CurrentOrder');
  const loadCurrentOrder = async () => {
    setOrders((await currentOrder).items);
  };
  useEffect(() => {
    loadCurrentOrder();
  }, []);

  return delivered ? (
    showOrderReturn ? (
      <div id="myOrders">
        <div className="myOrders-title py-2 px-3 rounded mb-3">
          <Row className=" mb-4 align-items-center">
            <Col md={3}>
              <h3 className="text-black">{t('MY_ORDERS')}</h3>
            </Col>
            <Col md={9}>
              <SearchForm placeholder={t('PRODUCT_SEARCH')} btnContent={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            </Col>
          </Row>
        </div>
        <HTabs
          tabs={[
            {
              title: t('CURRENT_ORDERS'),
              content: (
                <CurrentOrders
                  setDelivered={setDelivered}
                  delivered={delivered}
                  orders={orders?.items?.filter(item => item.status === 'current')}
                />
              ),
            },
            {
              title: t('ORDERS_COMPLTED'),
              content: (
                <CompletedOrders
                  orders={orders?.items?.filter(item => item.status === 'completed')}
                  setDelivered={setDelivered}
                  delivered={delivered}
                  setShowOrderReturn={setShowOrderReturn}
                />
              ),
            },
            {
              title: t('RETURNS'),
              content: <ReturnHistory />,
            },
            {
              title: t('CANCELED_ORDERS'),
              content: <CanceledOrders />,
            },
          ]}
        />
      </div>
    ) : showRecoveryDetails ? (
      <OrderReturn showRecoveryDetails={setShowRecoveryDetails} />
    ) : viewReturns ? (
      <RecoveryDetails setViewReturns={setViewReturns} />
    ) : showReturnInvoice ? (
      <ViewReturns setShowReturnInvoice={setShowReturnInvoice} />
    ) : (
      <ReturnInvoice />
    )
  ) : (
    <MyOrderDetails />
  );
};

export default MyOrders;
