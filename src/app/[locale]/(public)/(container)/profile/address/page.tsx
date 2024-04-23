'use server';

import React, { Suspense } from 'react';
import { ResolvingMetadata, Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Loader, Address } from '@components';
import { Actions } from '@libs/actions';

type Props = {
  params: { locale: string; path?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  const _defaultMetaData = await Actions.app.metaDataForTitleDescPageTemplate({ title: 'Addresses', index: false });
  return _defaultMetaData.data ?? notFound();
}
const Page = async () => {
  const { data: addresses, serverError, validationErrors } = await Actions.account.getMyAddresses();

  if (serverError || validationErrors || addresses?.error) notFound();

  return (
    <Suspense fallback={<Loader />}>
      <Address data={addresses?.data ?? []} />
    </Suspense>
  );
};

export default Page;
