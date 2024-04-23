'use client';

import React from 'react';
import * as Yup from 'yup';
import { useLocale } from 'next-intl';
import { FormGroup, Label } from 'reactstrap';
import { Field, FieldAttributes, FormikErrors, FormikHelpers, FormikValues, useFormikContext } from 'formik';

import { useTranslate } from '@app/hooks';
import { AppForm, ButtonMaker, FormFieldType } from '@components';
import zones from '@assets/egypt.json';
import { appRegx } from '@libs/regx';
import { env } from '@libs';

interface IAddAddressProps {
  onSubmit: (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => Promise<any>;
  onCancel: () => void;
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
}

const DependentField = (props: FieldAttributes<any>) => {
  const { values } = useFormikContext<any>(); // get Formik state and helpers via React Context
  const t = useTranslate('COMP_AddAddresses');
  const locale: 'ar' | 'en' = useLocale() as 'ar' | 'en';
  const egyptCities = Object(zones)[env.NEXT_PUBLIC_STORE_ID] ?? zones['tot'];

  const DistrictOptions = () => (
    <React.Fragment>
      <option value="">{t('DEFAULT_SELECT')}</option>
      {egyptCities
        .find((city: Record<string, string>) => city.id === values.regionId)
        ?.districts.sort((a: Record<string, string>, b: Record<string, string>) => a[locale].localeCompare(b[locale]))
        .map((dist: { id: string; ar: string; en: string }) => (
          <option key={dist.id} value={dist.id}>
            {dist[locale]}
          </option>
        ))}
    </React.Fragment>
  );

  return values.regionId ? <DistrictOptions /> : <option value="">{t('DEFAULT_SELECT')}</option>;
};

const AddAddress = (props: IAddAddressProps) => {
  const { onSubmit, onCancel, initialValues } = props;
  const t = useTranslate('COMP_AddAddresses');
  const locale: 'ar' | 'en' = useLocale() as 'ar' | 'en';
  const egyptCities = Object(zones)[env.NEXT_PUBLIC_STORE_ID] ?? zones['tot'];

  const CityOptions = () => (
    <React.Fragment>
      <option value="">{t('DEFAULT_SELECT')}</option>
      {egyptCities
        .sort((a: Record<string, string>, b: Record<string, string>) => a[locale].localeCompare(b[locale]))
        .map(
          (city: {
            id: string;
            ar: string;
            en: string;
            districts: {
              id: string;
              ar: string;
              en: string;
            }[];
          }) => (
            <option key={city.id} value={city.id}>
              {city[locale]}
            </option>
          ),
        )}
    </React.Fragment>
  );

  const formFields: Array<FormFieldType> = [
    {
      name: 'firstName',
      label: t('FIRST_NAME'),
      type: 'text',
      design: 'me-3',
      div: 6,
      autoComplete: 'given-name',
    },
    {
      name: 'lastName',
      label: t('LAST_NAME'),
      type: 'text',
      design: 'me-3',
      div: 6,
      autoComplete: 'family-name',
    },
    {
      name: 'phone',
      label: t('PHONE_NUMBER'),
      type: 'text',
      design: 'me-3',
      div: 6,
      autoComplete: 'tel',
    },
    {
      name: 'email',
      label: t('EMAIL_ADDRESS'),
      type: 'email',
      design: 'me-3',
      div: 6,
      autoComplete: 'email',
    },
    {
      name: 'regionId',
      label: t('CITY'),
      as: 'select',
      design: 'me-3',
      div: 6,
      children: CityOptions(),
      autoComplete: 'address-level1',
    },
    {
      name: 'city',
      label: t('DISTRICT'),
      as: 'select',
      design: 'me-3',
      div: 6,
      children: <DependentField />,
      autoComplete: 'address-level2',
    },
    {
      name: 'building',
      label: t('BUILDING'),
      type: 'text',
      design: 'me-3',
      div: 4,
      autoComplete: 'on',
    },
    {
      name: 'floor',
      label: t('FLOOR'),
      type: 'text',
      design: 'me-3',
      div: 4,
      autoComplete: 'on',
    },
    {
      name: 'flat',
      label: t('FLAT'),
      type: 'text',
      design: 'me-3',
      div: 4,
      autoComplete: 'on',
    },
    {
      name: 'address',
      label: t('LINE1'),
      type: 'text',
      design: 'me-3',
      autoComplete: 'street-address',
    },
    {
      name: 'countryName',
      label: '',
      type: 'hidden',
      value: 'Egypt',
    },
    {
      name: 'countryCode',
      label: '',
      type: 'hidden',
      value: 'EGY',
    },
    {
      name: 'postalCode',
      label: '',
      type: 'hidden',
      value: '0020',
    },
    {
      name: 'id',
      label: '',
      type: 'hidden',
    },
  ];

  const defaultValues = {
    id: '',
    addressType: '',
    firstName: '',
    lastName: '',
    phone: '',
    regionId: '',
    city: '',
    address: '',
    countryName: 'Egypt',
    countryCode: 'EGY',
    postalCode: '0020',
  };

  const validationSchema = Yup.object().shape({
    addressType: Yup.string().min(1).required(t('REQUIRED_CITY')),
    firstName: Yup.string()
      .min(3, t('ERR_FIRST_NAME_MIN', { length: 3 }))
      .max(128, t('ERR_FIRST_NAME_MAX', { length: 128 }))
      .required(t('REQUIRED_FIRST_NAME')),
    lastName: Yup.string()
      .min(3, t('ERR_LAST_NAME_MIN', { length: 3 }))
      .max(128, t('ERR_LAST_NAME_MAX', { length: 128 }))
      .required(t('REQUIRED_LAST_NAME')),
    email: Yup.string().email(t('INVALID_EMAIL')).required(t('REQUIRED_EMAIL')),
    phone: Yup.string().required(t('REQUIRED_PHONE_NUMBER')).matches(appRegx.PhoneRegExp, t('INVALID_PHONE_NUMBER')),
    regionId: Yup.string().required(t('REQUIRED_CITY')),
    city: Yup.string().required(t('REQUIRED_DISTRICT')),
    building: Yup.string().required(t('REQUIRED_BUILDING_NUMBER')),
    floor: Yup.string().required(t('REQUIRED_FLOOR_NUMBER')),
    flat: Yup.string().required(t('REQUIRED_FLAT_NUMBER')),
    address: Yup.string().required(t('REQUIRED_ADDRESS')),
  });

  const CancelBtn = ({ children }: { children: React.ReactNode }) => (
    <React.Fragment>
      {children}
      <ButtonMaker block={true} text={t('CANCEL')} design="my-2" type="button" onClick={onCancel} outline={true} />
    </React.Fragment>
  );

  const FieldComponents = ({
    children,
    values,
    errors,
  }: {
    children: React.ReactNode;
    values: FormikValues;
    errors: FormikErrors<FormikValues>;
  }) => (
    <React.Fragment>
      <FormGroup>
        <div
          role="group"
          aria-labelledby="addressType"
          className="d-flex gap-2 mb-3"
          defaultValue={initialValues?.addressType ?? defaultValues.addressType}
        >
          <div>
            <Field className="btn-check" type="radio" name="addressType" id="addressType-home" value="2" />
            <Label
              className={`mb-0 border rounded px-2 address-type-label${values.addressType === '2' ? ' active' : ''}`}
              htmlFor="addressType-home"
            >
              <i className="fa-solid fa-house fs-3 me-2 py-2"></i>
              {t('HOME')}
            </Label>
          </div>
          <div>
            <Field className="btn-check" type="radio" name="addressType" id="addressType-work" value="1" />
            <Label
              className={`mb-0 border rounded px-2 address-type-label${values.addressType === '1' ? ' active' : ''}`}
              htmlFor="addressType-work"
            >
              <i className="fa-solid fa-briefcase fs-3 me-2 py-2"></i>
              {t('WORK')}
            </Label>
          </div>
          <div>
            <Field className="btn-check" type="radio" name="addressType" id="addressType-other" value="3" />
            <Label
              className={`mb-0 border rounded px-2 address-type-label${values.addressType === '3' ? ' active' : ''}`}
              htmlFor="addressType-other"
            >
              <i className="fa-solid fa-city fs-3 me-2 py-2"></i>
              {t('OTHER')}
            </Label>
          </div>
        </div>
        {errors.addressType && <small className="text-danger">{t('REQUIRED_ADDRESS_TYPE')}</small>}
      </FormGroup>
      {children}
    </React.Fragment>
  );

  return (
    <AppForm
      initialValues={initialValues ?? defaultValues}
      validationSchema={validationSchema}
      fields={formFields}
      buttonText={t('SAVE_ADDRESSES')}
      onSubmit={(values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
        return onSubmit(
          {
            ...values,
            regionName: egyptCities.find((city: Record<string, string>) => city.id === values.regionId).en,
          },
          formikHelpers,
        );
      }}
      ActionComponent={CancelBtn}
      FieldComponent={FieldComponents}
    />
  );
};

export default AddAddress;
