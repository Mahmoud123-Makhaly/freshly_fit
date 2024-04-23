import React from 'react';
import { Row, Col } from 'reactstrap';
import { ResolvingMetadata, Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ResetPassword } from '@components';
import { Actions } from '@libs/actions';

type Props = {
  params: { locale: string; path?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  const _defaultMetaData = await Actions.app.metaDataForTitleDescPageTemplate({
    title: 'Reset-Password',
    index: false,
  });
  return _defaultMetaData.data ?? notFound();
}

const Page = () => {
  return (
    <Row>
      <Col lg={7} xl={6} className="flex-col d-lg-block p-0">
        <ResetPassword />
      </Col>
    </Row>
  );
};

export default Page;
