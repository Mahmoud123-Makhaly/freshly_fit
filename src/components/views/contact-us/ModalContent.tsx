import React from 'react';

import check from '@assets/images/contact-us/check.svg';
import { ButtonMaker, ImageWithFallback } from '@components';
import { useTranslate } from '@app/hooks';
import { Link } from '@navigation';

interface IModalContentProps {
  setToggleShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalContent = (props: IModalContentProps) => {
  const { setToggleShow } = props;
  const t = useTranslate('COMP_Modal_Content');
  return (
    <div className="modal-info">
      <i className="fa-solid fa-xmark close-icon text-end" onClick={() => setToggleShow(false)}></i>
      <div className="py-3 text-center">
        <ImageWithFallback src={check} width={0} height={0} alt="check" />
        <h3 className="text-24 pt-3 fw-bold send-confirmation">{t('THANKS_MESSAGE')} </h3>
        <p className="mt-3  modal-info-desc">{t('MODAL_DESC')}</p>
        <Link href={'/list'}>
          <ButtonMaker text={t('CONTINUE_SHOPPING')} block={true} />
        </Link>
      </div>
    </div>
  );
};

export default ModalContent;
