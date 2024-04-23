'use server';

import React, { ReactNode, Suspense } from 'react';
import { ResolvingMetadata, Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Footer, Header } from '@components';
import { Actions } from '@libs/actions';
import { Loader } from '@components';

type Props = {
  children: ReactNode;
  params: { locale: string; path?: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  const _defaultMetaData = await Actions.app.defaultLayoutMetaData();
  return _defaultMetaData ?? notFound();
}
const PublicLayout = async (props: Props) => {
  const { params, children } = props;

  return (
    <Suspense key={params.path} fallback={<Loader />}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Suspense>
  );
};
export default PublicLayout;
