import React from 'react';

import { Form, FormikProvider, useFormik } from 'formik';

import { IFormControl, ButtonMaker, FormMaker } from '@components';
import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';

const ResetPasswordForm = (props: IFormControl) => {
  const t = useTranslate('COMP_ResetPassword');

  const { title, subtitle, fields, buttonText, initialValues, validationSchema, onSubmit } = props;
  const handling = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <React.Fragment>
      {title && <h3 className="form-title text-center">{title}</h3>}
      {subtitle && <h6>{subtitle}</h6>}
      <FormikProvider value={handling}>
        <Form
          className="formMaker"
          onSubmit={e => {
            e.preventDefault;
            handling.handleSubmit();
          }}
        >
          <FormMaker fields={fields} handling={handling} />
          <ButtonMaker type="submit" block={true} text={buttonText} design="text-white" disabled={!handling.dirty} />
        </Form>
      </FormikProvider>
      <div className="other-options m-0">
        <span>{t('OR')}</span>
      </div>
      <div className="flex-center">
        <p>{t('BACK')}</p>
        <Link className="forget-password password ms-1 text-decoration-underline" href={'/auth/login'}>
          {t('LOGIN')}
        </Link>
      </div>
    </React.Fragment>
  );
};

export default ResetPasswordForm;
