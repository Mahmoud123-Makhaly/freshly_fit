'use client';

import React from 'react';

import check from '@assets/images/profile/check.svg';
import { ButtonMaker, ImageWithFallback } from '@components';
import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';

interface IEvaluationFeedBackProps {
  setCustomerFeedBack: React.Dispatch<React.SetStateAction<boolean>>;
}
const RatingFeedBackModal = (props: IEvaluationFeedBackProps) => {
  const { setCustomerFeedBack } = props;
  const t = useTranslate('Comp_Rating_Feedback');
  return (
    <div className="evaluation-feedback">
      <div className="text-end">
        <i className="fa-solid fa-xmark close-icon text-gray" onClick={() => setCustomerFeedBack(false)}></i>
      </div>
      <div className="feedBack-info text-center">
        <ImageWithFallback src={check} alt="check" width={0} height={0} />
        <h3 className="feedBack-title text-24 text-info">{t('EVALUATION_SEND_SUCCESSFULLY')}</h3>
        <p className="feedBack-desc"> {t('THANKS_MESSAGE')} </p>
        <Link href={'/list/baked'}>
          <ButtonMaker text={t('CONTINUE_SHOPPING')} design="bg-primary fw-bold" block={true} />
        </Link>
      </div>
    </div>
  );
};

export default RatingFeedBackModal;
