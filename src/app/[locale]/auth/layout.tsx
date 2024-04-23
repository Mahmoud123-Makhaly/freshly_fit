'use server';

import React, { ReactNode } from 'react';
import { Container } from 'reactstrap';
import { ResolvingMetadata, Metadata } from 'next';
import { notFound,redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import authOptions from '@auth';
import { AuthHeader } from '@components';
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
export default async function PublicLayout({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(authOptions);

  if (session && session.isAuthorized) redirect('/');

  return (
    <React.Fragment>
      <AuthHeader />
      <main className="auth-page">
        <Container>{children}</Container>
      </main>
    </React.Fragment>
  );
}
