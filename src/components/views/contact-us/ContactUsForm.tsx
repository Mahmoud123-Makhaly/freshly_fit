'use client';

import React, { useState } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';

import { FormMaker, ButtonMaker } from '@components';
import { useTranslate } from '@app/hooks';
import { IFormControl } from '@components';
import { Modal } from '@components';

import ModalContent from './ModalContent';

const ContactUsForm = (props: IFormControl) => {
  const { title, fields, buttonText, initialValues, validationSchema, onSubmit } = props;
  const [toggleShow, setToggleShow] = useState(false);
  const t = useTranslate('COMP_Contact_Form');
  const handling = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="contact-form rounded">
      <p className="contact-form-title rounded d-none d-md-block"> {title}</p>

      <FormikProvider value={handling}>
        <Form
          className="formMaker"
          onSubmit={e => {
            e.preventDefault();
            handling.handleSubmit();
            handling.validateOnChange;
            setToggleShow(true);
          }}
        >
          <FormMaker fields={fields} handling={handling} />
          <ButtonMaker type="submit" block text={buttonText} design=" bg-primary" />
        </Form>
        <Modal toggleShow={toggleShow}>
          <ModalContent setToggleShow={setToggleShow} />
        </Modal>
      </FormikProvider>
    </div>
  );
};

export default ContactUsForm;
