'use client';

import React, { ReactElement } from 'react';
import { ErrorMessage, Field } from 'formik';
import { Row, Col, FormGroup, Label } from 'reactstrap';

import { FormFieldType } from './FormMaker.types';

interface IFormMakerProps {
  fields: FormFieldType[];
  handling: any;
}

const FormMaker = (props: IFormMakerProps) => {
  const { fields, handling } = props;
  return (
    <Row>
      {fields &&
        fields.map((elem, indx) => {
          const { id, col, label, name, placeholder, type, design, children, as, Error, ...rest } = elem;
          return (
            <React.Fragment key={id || 'form-elem-' + indx.toString()}>
              {type !== 'hidden' && !as ? (
                <Col md={col || 12} className="p-0">
                  <FormGroup className={design}>
                    {label && (
                      <Label htmlFor={id || name} className="label">
                        {label}
                      </Label>
                    )}
                    <Field
                      name={name}
                      placeholder={placeholder}
                      type={type}
                      className="form-control rounded"
                      id={id || name}
                      value={handling.values[name] ?? ''}
                      {...handling.getFieldProps({ name })}
                      {...rest}
                    />
                    {Error ? (
                      <Error error={handling.errors[name]} value={handling.values[name]} />
                    ) : (
                      <ErrorMessage name={name} id={`form_field_err_${name}`}>
                        {msg => <small className="text-danger">{msg}</small>}
                      </ErrorMessage>
                    )}
                  </FormGroup>
                </Col>
              ) : as ? (
                <Col md={col || 12} className="p-0">
                  <FormGroup className={design}>
                    {label && (
                      <Label htmlFor={id || name} className="label">
                        {label}
                      </Label>
                    )}
                    <Field
                      name={name}
                      placeholder={placeholder}
                      as={as}
                      className="form-control rounded"
                      id={id || name}
                      value={handling.values[name] ?? ''}
                      {...handling.getFieldProps({ name })}
                      {...rest}
                    >
                      {children}
                    </Field>
                    {Error ? (
                      <Error error={handling.errors[name]} value={handling.values[name]} />
                    ) : (
                      <ErrorMessage name={name} id={`form_field_err_${name}`}>
                        {msg => <small className="text-danger">{msg}</small>}
                      </ErrorMessage>
                    )}
                  </FormGroup>
                </Col>
              ) : (
                <Field
                  name={name}
                  placeholder={placeholder}
                  type={type}
                  className="form-control rounded"
                  id={id || name}
                  value={handling.values[name] ?? ''}
                  {...handling.getFieldProps({ name })}
                  {...rest}
                />
              )}
            </React.Fragment>
          );
        })}
    </Row>
  );
};

export default FormMaker;
