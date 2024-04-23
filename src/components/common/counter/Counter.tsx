'use client';

import React, { Dispatch, SetStateAction } from 'react';
interface ICounterProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}
const Counter = (props: ICounterProps) => {
  const { count, setCount } = props;
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="counter rounded-2 d-flex justify-content-around align-items-center ">
      <p className="icons flex-col justify-content-center pe-2">
        <i className="fa-solid fa-caret-up text-muted" onClick={handleIncrement}></i>
        <i className="fa-solid fa-caret-down text-muted" onClick={handleDecrement}></i>
      </p>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
