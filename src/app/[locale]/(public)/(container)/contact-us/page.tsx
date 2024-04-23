import React from 'react';
import { Col, Row } from 'reactstrap';

import { ContactUs } from '@components';

const Page = () => {
  return (
    <Row className="forgot-password">
      <Col>
        <ContactUs />
      </Col>
    </Row>
  );
};

export default Page;
