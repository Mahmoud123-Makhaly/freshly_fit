'use client';

import React from 'react';
import * as Yup from 'yup';
import { Field, FormikHelpers } from 'formik';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

import { FormFieldType, AppForm } from '@components';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';
import { Actions } from '@libs/actions';
import { Utils } from '@libs';

import SocialLogin from '../SocialLogin';

const Login = () => {
  const t = useTranslate('COMP_LoginForm');
  const searchParams = useSearchParams();

  const formFields: Array<FormFieldType> = [
    {
      name: 'email',
      label: t('EMAIL_ADDRESS'),
      type: 'text',
      autoComplete: 'email',
    },
    {
      name: 'password',
      label: t('PASSWORD'),
      type: 'password',
      autoComplete: 'current-password',
    },
  ];
  const onSubmit = async (values: any, formikHelpers: FormikHelpers<any>) => {
    const {
      data: jwt,
      validationErrors: jwtValidationError,
      serverError: jwtServerError,
    } = await Actions.account.login({ email: values.email, password: values.password });

    if (!jwt?.data || jwt?.error || jwtValidationError || jwtServerError) {
      if (
        jwt &&
        Utils.hasPropertyWithSpecificValue(
          { ...jwt.error },
          'errorDescription',
          'The username/password couple is invalid.',
        )
      )
        formikHelpers.setFieldError('errorSummary', t('INVALID_EMAIL_OR_PASSWORD'));
      else formikHelpers.setFieldError('errorSummary', t('GENERIC_ERR_MSG'));
    } else {
      const {
        data: user,
        validationErrors: userValidationError,
        serverError: userServerError,
      } = await Actions.account.getCurrentUser({ accessToken: jwt?.data?.accessToken });

      if (!user?.data || user?.error || userValidationError || userServerError) {
        formikHelpers.setFieldError('errorSummary', t('GENERIC_ERR_MSG'));
      } else {
        const session = { jwt: jwt.data, user: user.data };
        await Actions.session.setupSession(session.user).finally(() =>
          signIn('default', {
            jwt: JSON.stringify(session.jwt),
            user: JSON.stringify(session.user),
            callbackUrl: new URL(searchParams.get('redirectURL') || '', window.location.origin).toString(),
          }),
        );
      }
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t('INVALID_EMAIL')).required(t('REQUIRED_EMAIL')),
    password: Yup.string().required(t('REQUIRED_PASSWORD')),
  });

  return (
    <div className="auth-form bg-white rounded-3 h-auto">
      <AppForm
        title={t('LOGIN')}
        initialValues={{
          email: '',
          password: '',
          rememberMe: false,
        }}
        validationSchema={validationSchema}
        fields={formFields}
        buttonText={t('LOGIN')}
        onSubmit={onSubmit}
      >
        <div className="flex-between password">
          <div className="d-flex align-items-center">
            <Field type="checkbox" name="rememberMe" title={t('REMEMBER_ME')} className="mx-2 text-primary" />
            <label htmlFor="rememberMe">{t('REMEMBER_ME')}</label>
          </div>
          <Link
            className="forget-password"
            href={`/auth/forgot-password${searchParams.get('redirectURL') ? `?redirectURL=${searchParams.get('redirectURL')}` : ''}`}
          >
            {t('DID_FORGOT_PASSWORD')}
          </Link>
        </div>
      </AppForm>
      {/* <SocialLogin /> */}
      <div className="flex-center">
        <p className="pe-1">{t('DONT_HAVE_EMAIL')}</p>
        <Link
          className="forget-password"
          href={`/auth/sign-up${searchParams.get('redirectURL') ? `?redirectURL=${searchParams.get('redirectURL')}` : ''}`}
        >
          {t('SIGNUP')}
        </Link>
      </div>
    </div>
  );
};

export default Login;
