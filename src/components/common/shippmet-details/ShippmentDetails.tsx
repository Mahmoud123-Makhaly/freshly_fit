import React from 'react';

import { useTranslate } from '@app/hooks';
interface IShippingDetailsProps {
  data?: any;
}
const ShippmentDetails = (props: IShippingDetailsProps) => {
  const { data } = props;
  const t = useTranslate('Comp_ShippingDetails');
  return (
    <div className="border rounded p-3">
      <table className="invoice-table" style={{ borderCollapse: 'separate', borderSpacing: '0 20px' }}>
        <tbody>
          <tr>
            <td className="mb-5 "> {t('ORDER_NUMBER')} :</td>
            <td className="mx-5 d-inline-block fw-bold">
              {/* {data?.number} */}
              #123057822
            </td>
          </tr>
          <tr>
            <td className="mb-5"> {t('MOUNT')} :</td>
            <td className="mx-5 d-inline-block fw-bold">
              {/* {data?.total?.formattedAmount} */}
              300 {t('CURRENCY')}
            </td>
          </tr>
          <tr>
            <td className="mb-5">{t('ORDER_DATE')} :</td>
            <td className="mx-5 d-inline-block">
              {/* {data?.createdDate} */}
              12 نوفمبر 2023 - الساعة 10 صباحا
            </td>
          </tr>
          <tr>
            <td className="mb-5"> {t('DELIVERY_DATE')} :</td>
            <td className="mx-5 d-inline-block"> 12 نوفمبر 2023,الساعة 10 صباحا</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShippmentDetails;
