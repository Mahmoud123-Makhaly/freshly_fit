import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => {
  return (
    <div className="flex-center" style={{ height: '80vh' }}>
      <Spinner
        className="m-5"
        color="primary"
        style={{
          height: '3rem',
          width: '3rem',
        }}
      >
        Loading...
      </Spinner>
    </div>
  );
};

export default Loader;
