import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { Actions } from '@libs/actions';
import { AppMetadata, env } from '@libs';
import { DTO } from '@tot/core/types';
import { JsonLd, Loader, ProductDetailsHeader, ProductRating, RelatedProducts, Details } from '@components';

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const _slug = params.slug.at(-1);
  if (_slug) {
    const { data: product, validationErrors, serverError } = await Actions.products.getProductBySlug({ slug: _slug });

    if (product?.error || validationErrors || serverError) return notFound();
    else {
      const _seo = product?.data.seoInfo;
      const rootMetadata = new AppMetadata(
        _seo?.pageTitle || product?.data.name || 'Product',
        _seo?.metaDescription || product?.data.description || 'Product',
      );

      rootMetadata.bindOG({
        title: _seo?.pageTitle,
        description: _seo?.metaDescription,
        siteName: env.SITE_NAME,
        locale: params.locale,
        images: [
          { url: product?.data.imgSrc ?? new URL('cover.jpg', env.SITE_DOMAIN) },
          ...(product?.data.images?.map((x: any) => ({
            url: x.url ? x.url : new URL('cover.jpg', env.SITE_DOMAIN),
          })) || []),
        ],
      });

      return rootMetadata.build();
    }
  }

  const rootMetadata = new AppMetadata('Product', 'Product');
  rootMetadata.bindOG({
    title: 'Product',
    description: env[`SITE_DESCRIPTION_${params.locale === 'en' ? 'EN' : 'AR'}`],
    siteName: env.SITE_NAME,
    locale: params.locale,
    url: new URL(`${params.slug || `${params.locale}/product/${params.slug}`}`, env.SITE_DOMAIN),
    images: new URL('/cover.jpg', env.SITE_DOMAIN),
  });
  return rootMetadata.build();
}

const AssociatedProducts = async ({ productId }: { productId: string }) => {
  const { data: product, validationErrors, serverError } = await Actions.products.searchRelatedProducts({ productId });

  return product?.data?.associations?.items && product.data.associations.items.length ? (
    <React.Fragment>
      {product?.data?.JsonLd && <JsonLd html={product?.data?.JsonLd} />}
      <RelatedProducts products={product.data.associations.items} />
    </React.Fragment>
  ) : null;
};

const ProductReviews = async ({ product }: { product: DTO.IProductDTO }) => {
  const pageSize = 5;
  const {
    data: reviews,
    validationErrors,
    serverError,
  } = await Actions.products.getProductReviews({ productId: product.id, skip: 0, take: pageSize });
  return <ProductRating productReview={reviews?.data} product={product} pageSize={pageSize} />;
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const _slug = params.slug.at(-1) ?? '';
  const { data: product, validationErrors, serverError } = await Actions.products.getProductBySlug({ slug: _slug });
  if (product?.error || validationErrors || serverError || !product?.data) return notFound();

  return (
    <div className="product-details">
      {product?.data?.JsonLd && <JsonLd html={product?.data?.JsonLd} />}
      <Suspense fallback={<Loader />}>
        <ProductDetailsHeader />
        <Details product={product?.data} />
        {env.REVIEWS_MODE !== 'None' && (
          <Suspense fallback={<Loader />}>
            <ProductReviews product={product?.data} />
          </Suspense>
        )}
        <Suspense fallback={<Loader />}>
          <AssociatedProducts productId={product?.data.id ?? ''} />
        </Suspense>
      </Suspense>
    </div>
  );
};

export default Page;
