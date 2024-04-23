'use client';

import { Spinner } from 'reactstrap';

import ButtonMaker, { IButtonProps } from './ButtonMaker';
import { useFormStatus } from 'react-dom';

export interface ISubmitButtonProps extends Omit<IButtonProps, 'type'> {
  isLoading: boolean;
}
const SubmitButton = (props: ISubmitButtonProps) => {
  const { isLoading = false, type, ...rest } = props;

  return (
    <ButtonMaker {...rest} type="submit">
      {isLoading && <Spinner size="sm" type="grow" className="mx-2 flex-shrink-0" role="status" />}
    </ButtonMaker>
  );
};

export default SubmitButton;
