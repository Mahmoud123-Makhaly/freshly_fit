'use client';

import { Spinner } from 'reactstrap';

import ButtonMaker, { IButtonProps } from './ButtonMaker';
import { useFormStatus } from 'react-dom';

export interface IFavoriteButtonProps extends Omit<IButtonProps, 'type'> {
  isLoading: boolean;
  isFilled: boolean;
}
const FavoriteButton = (props: IFavoriteButtonProps) => {
  const { isLoading = false, isFilled = false, type, text, block, ...rest } = props;

  return (
    <div className="wrapper">
      <ButtonMaker {...rest} block={false} type="submit" text="" design="text-primary border rounded favorite" outline>
        <i className={`heart-icon ${isFilled ? 'fa-heart fa-solid' : 'fa-regular fa-heart'}`}></i>
      </ButtonMaker>
      {isLoading && (
        <div className="mask">
          <Spinner size="sm" type="grow" className="mx-2 flex-shrink-0" role="status" />
        </div>
      )}
    </div>
  );
};

export default FavoriteButton;
