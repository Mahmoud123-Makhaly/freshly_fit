'use client';

import React, { useState } from 'react';
import * as Yup from 'yup';
import { FormikHelpers } from 'formik';
import { useSession } from 'next-auth/react';

import { useTranslate } from '@app/hooks';
import { AppForm, ButtonMaker, FormFieldType, FormikValues } from '@components';
import { DTO } from '@tot/core/types';
import { Link, useRouter } from '@navigation';
import { appRegx } from '@libs/regx';
import { Actions } from '@libs/actions';
import { Utils } from '@libs';

import ChangePassword from './ChangePassword';

const MyAccount = ({ data }: { data: DTO.IContactDTO }) => {
  const t = useTranslate('Comp_My_Account');
  const [displayedForm, setDisplayedForm] = useState<'account' | 'change-password'>('account');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const { data: session } = useSession();
  const router = useRouter();

  const formFields: Array<FormFieldType> = [
    {
      name: 'firstName',
      label: t('FIRST_NAME'),
      type: 'text',
      col: 6,
      design: 'me-3',
      autoComplete: 'given-name',
    },
    {
      name: 'lastName',
      label: t('LAST_NAME'),
      type: 'text',
      col: 6,
      design: 'me-3',
      autoComplete: 'family-name',
    },
    {
      name: 'email',
      label: t('EMAIL_ADDRESS'),
      type: 'email',
      col: 6,
      design: 'read-only me-3',
      autoComplete: 'email',
      readOnly: true,
    },
    {
      name: 'phoneNumber',
      label: t('PHONE_NUMBER'),
      type: 'text',
      col: 6,
      design: 'me-3',
      autoComplete: 'tel',
    },
    {
      name: 'day',
      label: t('DAY'),
      type: 'number',
      col: 2,
      design: 'me-3',
      autoComplete: 'bday-day',
    },
    {
      name: 'month',
      label: t('MONTH'),
      type: 'number',
      col: 2,
      design: 'me-3',
      autoComplete: 'bday-month',
    },
    {
      name: 'year',
      label: t('YEAR'),
      type: 'number',
      col: 2,
      design: 'me-3',
      autoComplete: 'bday-years',
    },
  ];

  const initialValues = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.emails ? data.emails[0] : '',
    phoneNumber: data.phones ? data.phones[0] : '',
    day: data.birthdate?.getDay().toString() ?? '',
    month: data.birthdate?.getMonth().toString() ?? '',
    year: data.birthdate?.getFullYear().toString() ?? '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, t('ERR_FIRST_NAME_MIN', { length: 3 }))
      .max(128, t('ERR_FIRST_NAME_MAX', { length: 128 }))
      .required(t('REQUIRED_FIRST_NAME')),
    lastName: Yup.string()
      .min(3, t('ERR_LAST_NAME_MIN', { length: 3 }))
      .max(128, t('ERR_LAST_NAME_MAX', { length: 128 }))
      .required(t('REQUIRED_LAST_NAME')),
    email: Yup.string().email(t('INVALID_EMAIL')).required(t('REQUIRED_EMAIL')),
    phoneNumber: Yup.string()
      .required(t('REQUIRED_PHONE_NUMBER'))
      .matches(appRegx.PhoneRegExp, t('INVALID_PHONE_NUMBER')),
  });

  const onSubmit = async (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
    setSuccessMessage('');
    const isUniqueEmail = async () => {
      const isEmailUnique = await Actions.account.checkEmailUniqueness(values.email);
      if (isEmailUnique.data?.error || isEmailUnique.serverError || isEmailUnique.validationErrors) {
        formikHelpers.setFieldError('errorSummary', t('GENERIC_ERR_MSG'));
        return false;
      } else if (!isEmailUnique.data?.data) {
        formikHelpers.setFieldError('email', t('ALREADY_EMAIL_EXISTS'));
        return false;
      } else return true;
    };

    if (
      !formFields.find(x => x.name === 'email')!.readOnly &&
      values.email.toLowerCase() != session?.user?.email?.toLowerCase() &&
      !(await isUniqueEmail())
    )
      return;

    let birthDate: Date | undefined;
    if (values.day || values.month || values.year) {
      birthDate = Utils.isValidBirthDate(values.day, values.month, values.year);
      if (!birthDate) {
        formikHelpers.setFieldError('errorSummary', t('INVALID_BIRTH_DATE'));
        return;
      }
    }

    const updateContactStatus = await Actions.account.updateContact({
      id: session!.user!.memberId!,
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phoneNumber,
      email: formFields.find(x => x.name === 'email')!.readOnly ? session?.user?.email : values.email,
      birthDate: birthDate,
    });

    if (updateContactStatus.data?.error || updateContactStatus.serverError || updateContactStatus.validationErrors) {
      formikHelpers.setFieldError('errorSummary', t('GENERIC_ERR_MSG'));
      return false;
    } else {
      setSuccessMessage(t('SUCCESS_MSG'));
      window.scrollTo(0, 0);
    }
  };

  const CancelBtn = ({ children }: { children: React.ReactNode }) => (
    <React.Fragment>
      {children}
      <ButtonMaker
        block={true}
        text={t('CANCEL')}
        design="mt-3 mb-3 save"
        type="button"
        onClick={() => router.push('/')}
      />
    </React.Fragment>
  );

  return displayedForm === 'account' ? (
    <div className="my-account">
      <h3 className="account-title mb-3 text-24 text-info rounded">{t('PERSONAL_INFORMATION')}</h3>
      {successMessage && <h4 className="success-info">{successMessage}</h4>}
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        fields={formFields}
        onSubmit={onSubmit}
        ActionComponent={CancelBtn}
        buttonText={t('SAVE')}
      >
        <Link href={''} className="change-password" onClick={() => setDisplayedForm('change-password')}>
          {t('CHANGE_PASSWORD')}
        </Link>
      </AppForm>
    </div>
  ) : (
    <ChangePassword setToggleFormShow={() => setDisplayedForm('account')} />
  );
};

export default MyAccount;
