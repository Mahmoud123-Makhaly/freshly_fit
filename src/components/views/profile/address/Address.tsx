'use client';

import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useSession } from 'next-auth/react';
import { FormikHelpers } from 'formik';

import { AddAddress, FormikValues } from '@components';
import { Actions } from '@libs/actions';
import { DTO } from '@tot/core/types';
import { ButtonMaker } from '@components';
import { useTranslate } from '@app/hooks';
import { Utils } from '@libs';

import AddressTemplate from './AddressTemplate';
import Empty from './Empty';

const Address = ({ data }: { data: Array<DTO.IMemberAddressDTO> }) => {
  const t = useTranslate('COMP_Profile_Address');
  const { data: session } = useSession();
  const [addAddress, setAddAddress] = useState<{
    displayAddressForm: boolean;
    initialValues?: {
      id: string;
      addressType: string;
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      countryName: string;
      countryCode: string;
      postalCode: string;
      city: string;
      regionId: string;
      building: string;
      floor: string;
      flat: string;
      address: string;
    };
    setSuccessMessage?: string;
  }>({ displayAddressForm: false });

  const backToAddresses = () => {
    setAddAddress({ displayAddressForm: false });
  };

  const onSubmit = async (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
    const _updatedAddress = {
      key: values.id ?? undefined,
      addressType: Number.parseInt(values.addressType),
      firstName: Utils.convertArabicToEnglish(values.firstName),
      lastName: Utils.convertArabicToEnglish(values.lastName),
      phone: Utils.convertArabicToEnglish(values.phone),
      email: Utils.convertArabicToEnglish(values.email),
      countryName: Utils.convertArabicToEnglish(values.countryName),
      countryCode: Utils.convertArabicToEnglish(values.countryCode),
      postalCode: Utils.convertArabicToEnglish(values.city),
      city: Utils.convertArabicToEnglish(values.city),
      regionId: Utils.convertArabicToEnglish(values.regionId),
      regionName: Utils.convertArabicToEnglish(values.regionName),
      address: Utils.convertArabicToEnglish(values.address),
      building: Utils.convertArabicToEnglish(values.building),
      floor: Utils.convertArabicToEnglish(values.floor),
      flat: Utils.convertArabicToEnglish(values.flat),
    };

    const updateMyAddressesStatus = values.id
      ? await Actions.account.updateMyAddress({ memberId: session?.user?.memberId!, address: _updatedAddress })
      : await Actions.account.addMyAddress({ memberId: session?.user?.memberId!, address: _updatedAddress });

    if (
      updateMyAddressesStatus.data?.error ||
      updateMyAddressesStatus.serverError ||
      updateMyAddressesStatus.validationErrors
    ) {
      formikHelpers.setFieldError('errorSummary', t('GENERIC_ERR_MSG'));
      return false;
    } else {
      setAddAddress(() => ({
        displayAddressForm: false,
        setSuccessMessage: t(`SUCCESS_${values.id ? 'UPDATE' : 'ADD'}_MSG`),
      }));
      window.scrollTo(0, 0);
    }
  };

  const onEdit = (address: DTO.IMemberAddressDTO) => {
    const _address = {
      id: address.id ?? '',
      addressType: address.addressType?.toString() ?? '',
      firstName: address.firstName ?? '',
      lastName: address.lastName ?? '',
      phone: address.phone ?? '',
      email: address.email ?? '',
      countryName: address.countryName ?? 'Egypt',
      countryCode: address.countryCode ?? 'EGY',
      postalCode: address.city ?? '00202',
      regionId: address.regionId ?? '',
      city: address.city ?? '',
      address: address.address,
      building: address.building,
      floor: address.floor,
      flat: address.flat,
    };
    setAddAddress({ displayAddressForm: true, initialValues: _address });
  };

  useEffect(() => {
    if (addAddress.setSuccessMessage) {
      const timeoutId = setTimeout(() => {
        setAddAddress({ displayAddressForm: false });
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [addAddress.setSuccessMessage]);

  return (
    <React.Fragment>
      {addAddress.setSuccessMessage && <h4 className="success-info">{addAddress.setSuccessMessage}</h4>}
      <Row className="pb-4">
        {!addAddress.displayAddressForm && (
          <React.Fragment>
            <Col>
              {data && data.length ? (
                data.map((address, index) => {
                  return (
                    <div className="my-3" key={`address-${index}`}>
                      <AddressTemplate data={address} onEdit={onEdit} />
                    </div>
                  );
                })
              ) : (
                <Empty />
              )}
            </Col>
            <Col className="col-12">
              <ButtonMaker
                block
                text={t('ADD_NEW_ADDRESS')}
                onClick={() => setAddAddress({ displayAddressForm: true })}
              />
            </Col>
          </React.Fragment>
        )}
        {addAddress.displayAddressForm && (
          <React.Fragment>
            <Col>
              <AddAddress onSubmit={onSubmit} onCancel={backToAddresses} initialValues={addAddress.initialValues} />
            </Col>
          </React.Fragment>
        )}
      </Row>
    </React.Fragment>
  );
};

export default Address;
