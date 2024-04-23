'use client';

import React from 'react';
interface ISearchFormProps {
  placeholder?: string;
  btnContent?: React.ReactNode;
}
const SearchForm = (props: ISearchFormProps) => {
  const { placeholder, btnContent } = props;
  return (
    <form className="d-flex  flex-grow-1 search-form" role="search">
      <input className="form-control" type="search" placeholder={placeholder} aria-label="Search" />
      <button className="btn btn-outline-success search-btn" type="submit">
        {btnContent}
      </button>
    </form>
  );
};

export default SearchForm;
