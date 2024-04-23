'use client';
import React, { ReactNode } from 'react';
import { Input, Label } from 'reactstrap';
interface ICheckInputProps {
  name: string;
  children: ReactNode;
  type: 'checkbox' | 'radio';
  className?: string;
  [k: string]: any;
}
const CheckInput = (props: ICheckInputProps) => {
  const { name, children, type, className, ...rest } = props;
  return (
    <React.Fragment>
      <Input type={type} name={name} id={name} className="d-none" {...rest} />
  <Label htmlFor={name} className={`box-label ${className}`}>
        {children}
      </Label>
    </React.Fragment>
  );
};
export default CheckInput;
