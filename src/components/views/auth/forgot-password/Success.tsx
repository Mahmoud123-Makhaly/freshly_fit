'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { Actions } from '@libs/actions';
import { useTranslate } from '@app/hooks';
import emailICON from '@assets/images/auth/email-sent.svg';
import { SubmitButton, ImageWithFallback } from '@components';

interface IConfirmationProps {
  email: string;
}
const Success = ({ email }: IConfirmationProps) => {
  const t = useTranslate('COMP_Email_Confirmation');
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const resend = async () => {
    setIsLoading(true);
    const {
      data: requestStatus,
      serverError,
      validationErrors,
    } = await Actions.account.requestPasswordReset({
      email,
      state: { email },
      prefixLocale: locale,
    });

    if (requestStatus?.error || serverError || validationErrors)
      toast.error(t('GENERIC_ERR_MSG'), { position: 'top-center' });
    else if (requestStatus?.data) toast.success(t('RESEND_SUCCESS_MSG'), { position: 'top-center', duration: 5000 });
    setIsLoading(false);
  };

  return (
    <div className="email-confirm flex-col">
      <h3 className="fw-bold">{t('EMAIL_SENT')}</h3>
      <p className="text-center">{t('CONFIRM_EMAIL')}</p>
      <ImageWithFallback src={emailICON} alt="Confirmation email sent" />
      <p className="">
        {t('EMAIL_NOT_SENT')}
        <SubmitButton
          text={t('RESEND')}
          onClick={resend}
          design="text-primary text-decoration-underline fw-bold border-0 mx-1"
          isLoading={isLoading}
          tag="span"
          outline
        />
      </p>
      <div className="other-options m-0">
        <span>{t('OR')}</span>
      </div>

      <p>
        {t('BACK_TO')}
        <Link
          className="forget-password text-decoration-underline fw-bold"
          href={`/auth/login${searchParams.get('redirectURL') ? `?redirectURL=${searchParams.get('redirectURL')}` : ''}`}
        >
          {t('LOGIN')}
        </Link>
      </p>
    </div>
  );
};

export default Success;
