import React from 'react';
import { Col, Row } from 'reactstrap';

interface ListCountProps {
  title: string;
  options: Array<{ label: string; value: number }>;
  onChange: (value: number) => void;
  selectedValue: number;
}

const ListCount = (props: ListCountProps) => {
  const { title, options, onChange, selectedValue } = props;
  return (
    <Row className="align-items-center me-2">
      <Col md={3}>
        <span className="text-muted   fs-14 mb-1 d-none d-md-block">{title}</span>
      </Col>
      <Col md={9}>
        <select
          className="form-select font-14"
          aria-label="Default select example"
          onChange={e => onChange(parseInt(e.target.value))}
          style={{ maxWidth: '200px' }}
          defaultValue={selectedValue}
        >
          {options?.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Col>
    </Row>
  );
};

export default ListCount;
