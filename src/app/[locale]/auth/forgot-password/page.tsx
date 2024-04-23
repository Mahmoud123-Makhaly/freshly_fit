import React from 'react';
import { Row, Col } from 'reactstrap';
import { ResolvingMetadata, Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ForgotPassword } from '@components';
import { Actions } from '@libs/actions';

type Props = {
  params: { locale: string; path?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  const _defaultMetaData = await Actions.app.metaDataForTitleDescPageTemplate({
    title: 'Forgot-Password',
    index: false,
  });
  return _defaultMetaData.data ?? notFound();
}

const Page = async () => {
  return (
    <Row className="forgot-password">
      <Col lg={7} xl={6} className="p-0 flex-col d-lg-block">
        <ForgotPassword />
      </Col>
    </Row>
  );
};

export default Page;
