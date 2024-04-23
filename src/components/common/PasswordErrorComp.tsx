'use client';

import React from 'react';

import { useTranslate } from '@app/hooks';
import { appRegx } from '@libs/regx';

const PasswordErrorComp = ({ error, value }: { error: string; value: any }) => {
  const t = useTranslate('PASSWORD_STATUS');

  console.log({ error, value });

  const val = value?.toString();

  const isValid = (segmentKey: string) => {
    if (error && typeof error === 'string' && val && error.split(';').every(x => x !== segmentKey)) {
      return true;
    } else if (!error && val) return true;
    else if (!error && !val) return undefined;
    else return new RegExp(appRegx.PasswordRegExp).test(val ?? '');
  };

  return (
    <React.Fragment>
      <div className="d-flex w-100 mb-1 mt-2">
        <input
          className={`form-check-input rounded-circle me-2 h-auto ${isValid('required') === false ? 'border-danger' : ''}`}
          type="checkbox"
          name="password-required"
          id="password-required"
          checked={isValid('required')}
          disabled
        />
        <label htmlFor="password-required" className="justify-content-center text-discount text-14 text-gray">
          {t('REQUIRED_PASSWORD')}
        </label>
      </div>
      <div className="d-flex w-100 mb-1 mt-2">
        <input
          className={`form-check-input rounded-circle me-2 h-auto ${isValid('min') === false ? 'border-danger' : ''}`}
          type="checkbox"
          name="password-min"
          id="password-min"
          checked={isValid('min')}
          disabled
        />
        <label htmlFor="password-min" className="justify-content-center text-discount text-14 text-gray">
          {t('LENGTH_ERR')}
        </label>
      </div>
      <div className="d-flex w-100 mb-1">
        <input
          className={`form-check-input rounded-circle me-2 h-auto ${isValid('minUppercase') === false ? 'border-danger' : ''}`}
          type="checkbox"
          name="password-minUppercase"
          id="password-minUppercase"
          checked={isValid('minUppercase')}
          disabled
        />
        <label htmlFor="password-minUppercase" className="justify-content-center text-discount text-14 text-gray">
          {t('UPPERCASE_CHAR_ERR')}
        </label>
      </div>
      <div className="d-flex w-100 mb-1">
        <input
          className={`form-check-input rounded-circle me-2 h-auto ${isValid('minLowercase') === false ? 'border-danger' : ''}`}
          type="checkbox"
          name="password-minLowercase"
          id="password-minLowercase"
          checked={isValid('minLowercase')}
          disabled
        />
        <label htmlFor="password-minLowercase" className="justify-content-center text-discount text-14 text-gray">
          {t('LOWERCASE_CHAR_ERR')}
        </label>
      </div>
      <div className="d-flex w-100 mb-1">
        <input
          className={`form-check-input rounded-circle me-2 h-auto ${isValid('minNumbers') === false ? 'border-danger' : ''}`}
          type="checkbox"
          name="password-minNumbers"
          id="password-minNumbers"
          checked={isValid('minNumbers')}
          disabled
        />
        <label htmlFor="password-minNumbers" className="justify-content-center text-discount text-14 text-gray">
          {t('DIGIT_ERR')}
        </label>
      </div>
      <div className="d-flex w-100">
        <input
          className={`form-check-input rounded-circle me-2 h-auto ${isValid('minSymbols') === false ? 'border-danger' : ''}`}
          type="checkbox"
          name="password-minSymbols"
          id="password-minSymbols"
          checked={isValid('minSymbols')}
          disabled
        />
        <label htmlFor="password-minSymbols" className="justify-content-center text-discount text-14 text-gray">
          {t('SPECIAL_CHAR_ERR')}
        </label>
      </div>
    </React.Fragment>
  );
};

export default PasswordErrorComp;
