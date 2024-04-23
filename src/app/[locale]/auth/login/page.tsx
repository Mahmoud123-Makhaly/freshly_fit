import React, { ReactNode } from 'react';
import { Col, Row } from 'reactstrap';
import { ResolvingMetadata, Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Login } from '@components';
import { Actions } from '@libs/actions';

type Props = {
  params: { locale: string; path?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  const _defaultMetaData = await Actions.app.metaDataForTitleDescPageTemplate({ title: 'Login', index: false });
  return _defaultMetaData.data ?? notFound();
}
const Page = () => {
  return (
    <Row>
      <Col lg={7} xl={6} className="p-0 flex-col d-lg-block">
        <Login />
      </Col>
    </Row>
  );
};

export default Page;
