'use client';

import React, { useState } from 'react';
import * as Yup from 'yup';
import { useSearchParams } from 'next/navigation';
import { FormikHelpers, FormikValues } from 'formik';
import { useLocale } from 'next-intl';

import { Actions } from '@libs/actions';
import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';
import { AppForm, FormFieldType } from '@components';

import Success from './Success';

const ForgotPassword = () => {
  const t = useTranslate('COMP_ForgotPassword');
  const [requestedPasswordEmail, setRequestedPasswordEmail] = useState<string>();
  const searchParams = useSearchParams();
  const locale = useLocale();
  const formFields: Array<FormFieldType> = [
    {
      name: 'email',
      label: t('EMAIL_ADDRESS'),
      type: 'email',
    },
  ];

  const onSubmit = async (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
    const {
      data: requestStatus,
      serverError,
      validationErrors,
    } = await Actions.account.requestPasswordReset({
      email: values.email,
      state: { email: values.email },
      prefixLocale: locale,
    });
    if (requestStatus?.error || serverError || validationErrors)
      formikHelpers.setFieldError('errorSummary', t('GENERIC_ERR_MSG'));
    else if (requestStatus?.data) setRequestedPasswordEmail(values.email);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t('INVALID_EMAIL')).required(t('REQUIRED_EMAIL')),
  });

  return (
    <div className="auth-form bg-white rounded-3 h-auto">
      {!requestedPasswordEmail ? (
        <React.Fragment>
          <AppForm
            title={t('FORGOT_PASSWORD')}
            subtitle={t('ENTER_EMAIL')}
            initialValues={{
              email: '',
            }}
            validationSchema={validationSchema}
            fields={formFields}
            buttonText={t('RESET_PASSWORD')}
            onSubmit={onSubmit}
          />
          <div className="flex-center">
            <p>{t('BACK')}</p>
            <Link
              className="forget-password password text-decoration-underline ms-1"
              href={`/auth/login${searchParams.get('redirectURL') ? `?redirectURL=${searchParams.get('redirectURL')}` : ''}`}
            >
              {t('LOGIN')}
            </Link>
          </div>
        </React.Fragment>
      ) : (
        <Success email={requestedPasswordEmail} />
      )}
    </div>
  );
};

export default ForgotPassword;
