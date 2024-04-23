'use client';
import React from 'react';
import { Offcanvas as OFFcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
interface OffcanvasProps {
  header?: React.ReactNode;
  toggle?: React.KeyboardEventHandler<any> | React.MouseEventHandler<any> | undefined;
  headerToggle?: React.MouseEventHandler<any> | undefined;
  body: React.ReactNode;
  direction?: 'top' | 'start' | 'end' | 'bottom';
  scrollable?: boolean;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  isOpen: boolean;
}

const Offcanvas = (props: OffcanvasProps) => {
  const {
    body,
    header,
    headerToggle,
    toggle,
    direction,
    scrollable,
    className,
    bodyClassName,
    headerClassName,
    isOpen,
  } = props;
  return (
    <OFFcanvas direction={direction} toggle={toggle} scrollable={scrollable} className={className} isOpen={isOpen}>
      <OffcanvasHeader toggle={headerToggle} className={headerClassName}>
        {header}
      </OffcanvasHeader>
      <OffcanvasBody className={bodyClassName}>{body}</OffcanvasBody>
    </OFFcanvas>
  );
};

export default Offcanvas;
