import React from 'react';

import { AccordionFlush } from '@components';
import { useTranslate } from '@app/hooks';

const faqs = [
  {
    question: 'هل المنتجات خالية من الجلوتين ؟',
    answer:
      'تنفرد منتجاتنا بأنها خالية تماما من دقيق القمح نهائى ولكن قد تكون ملوثة بالجلوتين نتيجة زراعتها بجوار القمح ولذلك لا نجزم بأنها خالية من الجلوتين تماما .',
  },
  {
    question: 'هل المنتجات تصلح لمرضى السيلياك او مرضى الحساسيات المتعددة ؟',
    answer:
      'المنتج ليس منتج دوائي ويجب ان نستشير الطبيب المختص لذلك ، ولا ينصح بتناوله قبل استشارة الطبيب فى مكونات المنتج والتى تظهر بوضوح فى ظهر الكيس . .',
  },
];
const items = faqs.map(faq => ({
  header: <div className=" bg-transparent">{faq.question}</div>,
  content: <p className="text-16">{faq.answer}</p>,
}));
const FAQS = () => {
  const t = useTranslate('COMP_FAQS');
  return (
    <div className="faqs">
      <div className="faqs-header">
        <h3>{t('HEADER')}</h3>
      </div>
      <AccordionFlush items={items} headerClass="p-details-accordion" />
    </div>
  );
};

export default FAQS;
