import { HomePage } from '@components';

import { ResolvingMetadata, Metadata } from 'next';
import { AppMetadata, env } from '@libs';

type Props = {
  params: { locale: string; path?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const rootMetadata = new AppMetadata('Home', env[`SITE_DESCRIPTION_${params.locale === 'en' ? 'EN' : 'AR'}`]);
  rootMetadata.bindOG({
    title: 'Home',
    description: env[`SITE_DESCRIPTION_${params.locale === 'en' ? 'EN' : 'AR'}`],
    siteName: env.SITE_NAME,
    locale: params.locale,
    url: new URL(params.path || '/', env.SITE_DOMAIN),
    images: new URL('/cover.jpg', env.SITE_DOMAIN),
  });
  return rootMetadata.build('none');
}

export default async function Home(props: Props) {
  return <HomePage />;
}
