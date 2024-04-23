import { FormikHelpers } from 'formik';

export type FormInputTypes =
  | 'text'
  | 'email'
  | 'select'
  | 'file'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'textarea'
  | 'button'
  | 'reset'
  | 'submit'
  | 'date'
  | 'datetime-local'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'range'
  | 'search'
  | 'tel'
  | 'url'
  | 'week'
  | 'password'
  | 'datetime'
  | 'time'
  | 'color'
  | 'editor';

export interface FormikValues {
  [field: string]: any;
}

export interface FieldType {
  label?: string;
  name: string;
  id?: string;
  placeholder?: string;
  type?: FormInputTypes;
  as?: FormInputTypes;
  col?: number;
  readOnly?: boolean | undefined;
  design?: string;
  onElementChange?: (e: React.ChangeEvent<any>, values: any) => void;
  Error?: React.ComponentType<{ error: string; value: any }>;
  [key: string]: any;
}

export type FormFieldType = FieldType & ({ type?: never } | { as?: never });

export interface IFormControl<Values extends FormikValues = FormikValues> {
  title?: string;
  subtitle?: string;
  initialValues: any;
  validationSchema: any | (() => any);
  fields: Array<FormFieldType>;
  withAdvancedLink?: { label?: string; url: string };
  isLoading?: boolean;
  buttonText?: string;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
  submitLabel?: string | undefined;
  cancelLabel?: string | undefined;
}
