'use server';

import React, { Suspense } from 'react';
import { ResolvingMetadata, Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Loader, Wishlist, EmptyWishlist } from '@components';
import { Actions } from '@libs/actions';

type Props = {
  params: { locale: string; path?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  const _defaultMetaData = await Actions.app.metaDataForTitleDescPageTemplate({ title: 'Wishlist', index: false });
  return _defaultMetaData.data ?? notFound();
}
const Page = async () => {
  const { data: result, serverError, validationErrors } = await Actions.account.getDefaultWishlist();

  if (serverError || validationErrors || result?.error) notFound();
  return (
    <Suspense fallback={<Loader />}>
      {result?.data && (result.data.itemsCount || 0) > 0 ? <Wishlist data={result.data} /> : <EmptyWishlist />}
    </Suspense>
  );
};

export default Page;
