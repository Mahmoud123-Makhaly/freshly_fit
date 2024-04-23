'use client';

import React, { useState } from 'react';
import { UncontrolledAccordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
interface AccordionFlushProps {
  items: Array<{ header: React.ReactNode; content: React.ReactNode; id?: string }>;
  headerClass?: string;
  defaultOpen?: Array<string>;
  stayOpen?: boolean;
}

const AccordionFlush = (props: AccordionFlushProps) => {
  const { items, headerClass, defaultOpen, stayOpen } = props;
  const [open, setOpen] = useState<Array<string>>(defaultOpen && defaultOpen.length ? defaultOpen : []);

  const toggle = (id: string) => {
    if (!open.includes(id)) {
      setOpen(prev => [...prev, id]);
    } else if (open.includes(id)) {
      setOpen(prev => prev.filter(x => x != id));
    }
  };

  return (
    <div>
      <UncontrolledAccordion stayOpen={stayOpen} defaultOpen={open} toggle={toggle} className="accordion-flush mx-2">
        {items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader targetId={item.id ? item.id : `accordion-${index}`} className={headerClass}>
              {item.header}
              <i
                className="fa-solid fa-chevron-down chevron d-flex justify-content-center align-items-center"
                id={item.id ? item.id : `accordion-${index}`}
              ></i>
            </AccordionHeader>
            <AccordionBody accordionId={item.id ? item.id : `accordion-${index}`} aria-expanded="true">
              <div className="p-0">{item.content}</div>
            </AccordionBody>
          </AccordionItem>
        ))}
      </UncontrolledAccordion>
    </div>
  );
};

export default AccordionFlush;
