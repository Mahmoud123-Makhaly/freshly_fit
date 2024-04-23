'use client';

import { Spinner } from 'reactstrap';

import ButtonMaker, { IButtonProps } from './ButtonMaker';
import { useFormStatus } from 'react-dom';

export interface ICircledMaskedSpinnerSubmitButtonProps extends Omit<IButtonProps, 'type'> {
  isLoading: boolean;
  icon: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}
const CircledMaskedSpinnerSubmitButton = (props: ICircledMaskedSpinnerSubmitButtonProps) => {
  const { isLoading = false, isFilled = false, type, icon, ...rest } = props;

  return (
    <div className="wrapper">
      <ButtonMaker {...rest} type="submit" design="circled-btn bg-white border card-icon ms-3" outline>
        {icon}
      </ButtonMaker>
      {isLoading && (
        <div className="mask">
          <Spinner size="sm" type="grow" className="mx-2 flex-shrink-0" role="status" />
        </div>
      )}
    </div>
  );
};

export default CircledMaskedSpinnerSubmitButton;
