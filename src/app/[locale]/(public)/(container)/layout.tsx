'use server';

import React, { ReactNode } from 'react';
import { Container } from 'reactstrap';
import { ResolvingMetadata, Metadata } from 'next';
import { notFound } from 'next/navigation';

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
export default async function ContainerLayout(props: Props) {
  const { params, children } = props;
  return <Container>{children}</Container>;
}
