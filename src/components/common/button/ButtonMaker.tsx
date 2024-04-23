import React from 'react';
import { Button, ButtonProps } from 'reactstrap';

export interface IButtonProps extends Omit<ButtonProps, 'className' | 'cssModule' | 'tag'> {
  design?: string;
  tag?: 'button' | 'span';
}

const ButtonMaker = (props: IButtonProps) => {
  const {
    text,
    design,
    outline,
    color = 'primary',
    type,
    block = undefined,
    close,
    onClick,
    children,
    disabled = false,
    tag = 'button',
    ...rest
  } = props;

  return (
    <React.Fragment>
      {tag === 'button' && (
        <Button
          type={type}
          className={`button-maker ${design ?? ''}`}
          outline={outline}
          color={color}
          block={block}
          close={close}
          onClick={onClick}
          disabled={disabled}
          {...rest}
        >
          {text}
          {children}
        </Button>
      )}
      {tag === 'span' && (
        <span className={`button-maker ${design ?? ''}`} color={color} onClick={onClick} {...rest}>
          {text}
          {children}
        </span>
      )}
    </React.Fragment>
  );
};

export default ButtonMaker;
