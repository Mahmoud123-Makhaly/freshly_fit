'use client';

import React from 'react';
import { Card, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import { Rating as Rate } from 'primereact/rating';

import { DTO } from '@tot/core/types';
import { ImageMaker, FavoriteForm, Variation } from '@components';
import noImg from '@assets/images/product/noimg.svg';
import { Link, useRouter } from '@navigation';

interface ICardProps {
  product: DTO.IProductDTO;
  children?: React.ReactNode;
  reload?: () => void;
}

const VCardMaker = (props: ICardProps) => {
  const { product, children, reload } = props;
  const router = useRouter();

  const handleVariantSelection = (variant: DTO.IVariationTypeDTO) => {
    router.push(`/product/${variant.slug}`);
  };

  return (
    <Card className="h-100 vCard px-2 py-3 p-lg-3">
      <CardSubtitle>
        <div className="flex-between flex-row-reverse pb-3">
          <div>
            <FavoriteForm product={product!} enableActionNotification={true} />
          </div>
          {/* {badge && <Badge color="secondary">{badge}</Badge>} */}
        </div>
      </CardSubtitle>
      <Link href={product.slug ? `/product/${product.slug}` : '/'}>
        <ImageMaker
          src={product.imgSrc ?? noImg.src}
          alt={product.seoInfo?.imageAltDescription ?? product.name ?? product.slug}
          ratio="standard"
          width={600}
          height={600}
          design="rounded"
        />
      </Link>
      <div className="text-center flex-col justify-content-between mt-3">
        <Link href={product.slug ? `/product/${product.slug}` : '/'} className="text-black mb-3 p-0">
          <CardTitle className="m-0">
            <p className="text-12 p-0">{product.name}</p>
          </CardTitle>
        </Link>
        <CardText className="mb-3 p-0 text-12">
          {product.review && <Rate value={3} stars={5} className="mb-3 p-0" cancel={false} readOnly />}
        </CardText>
        <CardText className="mb-3 p-0 text-12">{product.description}</CardText>
        <CardText className="mb-3 p-0">
          <strong className="pe-1">{product.price?.list?.formattedAmount}</strong>
          {/* {discount && <del>{discount}</del>} */}
        </CardText>
        {(product?.hasVariations || product?.masterVariation) && (
          <CardText className="mb-3 p-0 text-12">
            {product?.hasVariations && product.variations?.length && (
              <Variation variations={product.variations} onSelect={handleVariantSelection} />
            )}
            {!product?.hasVariations && product?.masterVariation && (
              <Variation
                master={product.masterVariation}
                selectedVariantsSlugs={[product.slug ?? '']}
                onSelect={handleVariantSelection}
              />
            )}
          </CardText>
        )}
        {children}
      </div>
    </Card>
  );
};

export default VCardMaker;
