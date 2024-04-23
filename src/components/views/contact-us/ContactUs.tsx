'use client';

import React from 'react';
import * as Yup from 'yup';
import { Col, Row } from 'reactstrap';

import { useTranslate } from '@app/hooks';
import { FormFieldType, ImageWithFallback } from '@components';
import facebook from '@assets/images/footer/facebook.svg';
import instagram from '@assets/images/footer/instagram.svg';
import x from '@assets/images/footer/x.svg';

import ContactUsForm from './ContactUsForm';

const ContactUs = () => {
  const t = useTranslate('COMP_Contact_Us');
  const formFields: Array<FormFieldType> = [
    {
      name: 'email',
      label: t('EMAIL_ADDRESS'),
      type: 'email',
    },
    {
      name: 'phone',
      label: t('PHONE_NUMBER'),
      type: 'text',
    },
    {
      name: 'subject',
      label: t('SUBJECT'),
      type: 'text',
    },
    {
      name: 'message',
      label: t('MESSAGE'),
      type: 'textarea',
      design: 'rows-4',
    },
  ];
  const onSubmit = (values: any) => {
  };
  const validationSchema = Yup.object().shape({
    subject: Yup.string().required(t('REQUIRED_SUBJECT')),

    email: Yup.string().email(t('INVALID_EMAIL')).required(t('REQUIRED_EMAIL')),
  });
  return (
    <div className="contact-us">
      <p className="contact-title rounded"> {t('CONTACT_US')}</p>
      <Row className="contact-list ">
        <Col className="col-5 col-md-3  col-lg-2 contact-list-titles">
          <p className="title p-0 text-nowrap">{t('EMAIL')}:</p>
          <p className="title p-0 text-nowrap"> {t('MOBILE_NUMBER')}:</p>
          <p className="title p-0 text-nowrap"> {t('ADDRESS')} :</p>
          <p className="title p-0 text-nowrap"> {t('FOLLOW_US_ON')} :</p>
        </Col>
        <Col className="col-7 col-md-9 col-lg-10 contact-list-titles">
          <p className="text-12 p-0"> freshlyfitbread2023@gmail.com</p>
          <p className="text-12 p-0"> 01148494349</p>
          <p className="text-12 p-0"> القاهره , مصر</p>
          <ImageWithFallback src={facebook} alt="facebook" width={0} height={0} />
          <ImageWithFallback src={instagram} alt="instagram" width={0} height={0} />
          <ImageWithFallback src={x} alt="x" width={0} height={0} />
        </Col>
      </Row>
      <ContactUsForm
        initialValues={{
          subject: '',
          message: '',
          email: '',
          phone: '',
        }}
        title={t('CONTACT_US')}
        validationSchema={validationSchema}
        fields={formFields}
        buttonText={t('SEND_MESSAGE')}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default ContactUs;
