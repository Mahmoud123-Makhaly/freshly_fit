import React from 'react';

import { StaticPage } from '@components';

import { content } from './data';

const Page = async ({
  params,
}: {
  params: { locale: 'ar' | 'en'; path: 'terms-and-conditions' | 'delivery-policy' };
}) => {
  const { path, locale } = params;
  const data = content[path];
  return (
    <React.Fragment>
      {data && path && locale && (
        <StaticPage header={data[locale].header} body={data[locale].body} type={data.type as 'static' | 'accordion'} />
      )}
    </React.Fragment>
  );
};

export default Page;
