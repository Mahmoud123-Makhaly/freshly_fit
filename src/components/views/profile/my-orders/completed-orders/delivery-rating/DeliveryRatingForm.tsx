import React from 'react';

import { Form, FormikProvider, useFormik } from 'formik';

import { ButtonMaker, IFormControl, FormMaker } from '@components';

const DeliveryRatingForm = (props: IFormControl) => {
  const { initialValues, validationSchema, fields, buttonText, onSubmit } = props;

  const handling = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <FormikProvider value={handling}>
      <Form
        className="formMaker"
        onSubmit={e => {
          e.preventDefault();
          handling.handleSubmit();
          handling.validateOnChange;
        }}
      >
        <FormMaker fields={fields} handling={handling} />
        <ButtonMaker type="submit" block={false} text={buttonText}/>
      </Form>
    </FormikProvider>
  );
};

export default DeliveryRatingForm;
