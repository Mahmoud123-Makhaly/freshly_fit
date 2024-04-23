import React from 'react';

import { ButtonMaker, ShippingAddress } from '@components';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';
import { OrderAddressType } from '@core';

interface IEditAddressesProps {
  setToggleShow: React.Dispatch<React.SetStateAction<boolean>>;
  data: Array<OrderAddressType>;
}
const EditAddresses = (props: IEditAddressesProps) => {
  const t = useTranslate('Comp_Edit_Addresses');
  const { setToggleShow, data } = props;
  return (
    <div className="p-3 edit-addresses">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h6>{t('SHIPPING_ADDRESS')}</h6>
        <Link href={'/'} className="btn btn-primary text-white">
          <i className="fa-solid fa-plus add-addresses"></i>
          {t('ADD_NEW_ADDRESSES')}
        </Link>
      </div>
      {data.map((item, index) => (
        <ShippingAddress key={`shipping-address-${index}`} data={item}></ShippingAddress>
      ))}

      <ButtonMaker block={true} design="bg-white mt-2" text={t('CANCEL')} onClick={() => setToggleShow(false)} />
    </div>
  );
};

export default EditAddresses;
