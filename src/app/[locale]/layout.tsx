'use server';

import React, { ReactNode } from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

import '@assets/scss/main.scss';
import { Actions } from '@libs/actions';

import AuthProvider from '../../AuthProvider';

type Props = {
  children: ReactNode;
  params: { locale: string; path?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];
  const _defaultMetaData = await Actions.app.defaultLayoutMetaData();
  return _defaultMetaData ?? notFound();
}

export default async function LocaleLayout(props: Props) {
  const { params, children } = props;

  let messages;
  try {
    messages = (await import(`../../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html
      lang={params.locale}
      dir={params.locale === 'en' ? 'ltr' : 'rtl'}
      data-layout-dir={params.locale === 'en' ? 'ltr' : 'rtl'}
      data-preloader="disable"
    >
      <body dir={params.locale === 'en' ? 'ltr' : 'rtl'}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <AuthProvider>
            <Toaster position={params.locale === 'en' ? 'top-right' : 'top-left'} reverseOrder={false} />
            {children}
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
