'use server';

import React, { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { ResolvingMetadata, Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import authOptions from '@auth';
import { Actions } from '@libs/actions';

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

const ContainerLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);

  if (!session || !session.isAuthorized || !session.user) redirect('/auth/login');

  return <React.Fragment>{children}</React.Fragment>;
};
export default ContainerLayout;
