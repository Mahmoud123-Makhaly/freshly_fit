'use client';

import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';

import { BreadCrumb, CartSummary, ShippingAddress, ShippmentDetails } from '@components';
import { useTranslate } from '@app/hooks';
import { getInvoiceDetails } from '@utils';
import { CustomerOrderType } from '@core';
import { ItemRecap } from '@components';
interface IInvoiceProps {
  id: string;
}
const Invoice = (props: IInvoiceProps) => {
  const [invoice, setInvoice] = useState<CustomerOrderType>();
  const { id } = props;
  const t = useTranslate('COMP_Invoice');
  const TableData = [
    { text: t('TOTAL_SUB'), price: '300ج.م' },
    { text: t('DELIVERY_FEES'), price: '20ج.م' },
    { text: t('TOTAL'), price: '350 ج.م' },
  ];
  const invoiceDetails = getInvoiceDetails(id);
  const loadInvoiceDetails = async () => {
    setInvoice((await invoiceDetails).items);
  };
  useEffect(() => {
    loadInvoiceDetails();
  }, []);

  return (
    <React.Fragment>
      <div className="invoice pt-4">
        <Row>
          <Col className="col-12 pt-4 pb-3">
            {/* <BreadCrumb
              title={t('BREAD_MAIN')}
              paths={[
                {
                  title: t('BREAD_SHOPPING_CART'),
                  semanticUrl: '/cart',
                },
                {
                  title: t('BREAD_CHECKOUT'),
                  semanticUrl: '/checkout',
                },
                {
                  title: t('BREAD_ORDER_INVOICE'),
                  semanticUrl: `/invoice/${id}`,
                },
              ]}
            /> */}
          </Col>
        </Row>

        <div className=" d-flex justify-content-center bg-primary check-icon align-items-center rounded-circle m-auto">
          <i className="fa-solid fa-check  fa-2x  text-white"></i>
        </div>
        <h5 className="fw-bold text-center my-4">{t('ORDER_COMPLETED')}</h5>
        <div className=" p-3 border mt-2">
          <h5 className="my-3">{t('ORDER_CONFIRMATION')}</h5>
          <hr />
          <ShippmentDetails data={invoice} />
          <hr />
          <ShippingAddress data={invoice?.addresses[0]!} />
          <hr />
          <h6 className="fw-bold mb-3"> {t('ORDER_DETAILS')}</h6>
          <ItemRecap
            title={`باتون ساليه شوفان`}
            description={`350 جرام`}
            price={`100ج.م`}
            discount={`120 ج.م`}
            qty={`2`}
          />
          <ItemRecap
            title={`باتون ساليه شوفان`}
            description={`350 جرام`}
            price={`100ج.م`}
            discount={`120 ج.م`}
            qty={`2`}
          />
          <hr />
          <Row>
            <Col md={3}>
              <div className="invoice-summary">
                <CartSummary data={TableData} title={t('ORDER_SUMMARY')} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <h5 className="text-center my-5 fw-bold invoice-thanks-message">{t('THANKS_MESSAGE')}</h5>
    </React.Fragment>
  );
};

export default Invoice;
