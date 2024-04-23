import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';

import { ButtonMaker, IFormControl, FormMaker } from '@components';
import { useTranslate } from '@app/hooks';

const ProductRatingForm = (props: IFormControl) => {
  const { initialValues, validationSchema, fields, buttonText, onSubmit } = props;
  const t = useTranslate('COMP_Product_Evaluation_Form');

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
        <ButtonMaker type="submit" block={false} text={buttonText} />
      </Form>
    </FormikProvider>
  );
};

export default ProductRatingForm;
