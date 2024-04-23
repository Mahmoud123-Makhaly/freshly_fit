'use client';

import React, { useState } from 'react';
import * as Yup from 'yup';

import { FormFieldType, Modal } from '@components';
import { useTranslate } from '@app/hooks';

import ResetPasswordForm from './ResetPasswordForm';
import ConfirmModal from './ConfirmModal';

const ResetPassword = () => {
  const t = useTranslate('COMP_ResetPassword');
  const [successModal, setSuccessModal] = useState(false);
  const formFields: Array<FormFieldType> = [
    {
      name: 'password',
      label: t('NEW_PASSWORD'),
      type: 'password',
    },
    {
      name: 'confirm',
      label: t('REPEAT_NEW_PASSWORD'),
      type: 'password',
    },
  ];
  const onSubmit = (values: any) => {
    alert(successModal);
    setSuccessModal(true);
  };
  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Required'),
  });
  return (
    <div className="auth-form bg-white rounded-3 h-auto">
      <Modal toggleShow={successModal}>
        <ConfirmModal />
      </Modal>
      <ResetPasswordForm
        title={t('RESET_PASSWORD')}
        initialValues={{
          password: '',
          confirm: '',
        }}
        validationSchema={validationSchema}
        fields={formFields}
        buttonText={t('RESET_PASSWORD')}
        onSubmit={() => setSuccessModal(true)}
      />
    </div>
  );
};

export default ResetPassword;
