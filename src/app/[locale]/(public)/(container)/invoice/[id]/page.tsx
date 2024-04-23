import React from 'react';

import { Invoice } from '@components';

const Page = ({ params }: { params: { id: string } }) => {
  return <Invoice id={params.id} />;
};

export default Page;
