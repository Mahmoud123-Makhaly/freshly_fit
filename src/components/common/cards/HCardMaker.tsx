'use client';

import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Rating as Rate } from 'primereact/rating';

import { DTO } from '@tot/core/types';
import { Properties, ImageMaker, FavoriteForm, Variation } from '@components';
import { Link, useRouter } from '@navigation';
import gram from '@assets/images/gram.svg';
import noImg from '@assets/images/product/noimg.svg';

interface ICardProps {
  product: DTO.IProductDTO;
  children?: React.ReactNode;
  reload?: () => void;
}
const HCardMaker = (props: ICardProps) => {
  const { product, children, reload } = props;
  const router = useRouter();

  const handleVariantSelection = (variant: DTO.IVariationTypeDTO) => {
    router.push(`/product/${variant.slug}`);
  };

  return (
    <Card className="hCard">
      <CardBody>
        <Row>
          <Col md={4} className="pe-lg-3">
            <Link href={product.slug ? `/product/${product.slug}` : '/'}>
              <ImageMaker
                src={product.imgSrc ?? noImg.src}
                alt={product.seoInfo?.imageAltDescription ?? product.name}
                ratio="classic"
                width={600}
                height={600}
                design="rounded"
              />
            </Link>
          </Col>
          <Col md={8} className="ps-md-3">
            <div className="flex-col-start">
              {/* {badge && <Badge color="primary">{badge}</Badge>} */}
              <div className="pb-3">
                <Link href={product.slug ? `/product/${product.slug}` : '/'}>
                  <h6 className="fw-bold text-center flex-between text flex-column flex-md-row Hcard-title mb-0">
                    <span className="title">{product.name}</span>
                    <div>
                      {/* {discount && <del className="mx-1 fs-6 ">{discount}</del>} */}
                      <p>
                        <span className="mx-1 fs-6 price">{product.price?.list?.formattedAmount}</span>
                      </p>
                    </div>
                  </h6>
                </Link>
                {product.review && (
                  <Rate
                    value={product.review.value}
                    stars={5}
                    className="text-center text-md-start calories my-1"
                    readOnly
                  />
                )}
              </div>
              <div className="border-bottom border-top py-2">
                <Properties
                  data={[
                    {
                      imgUrl: gram,
                      text: '350 جرام',
                      className: 'd-flex align-items-center py-1',
                    },
                    {
                      imgUrl: gram,
                      text: 'خالى من دقيق القمح  ',
                      className: 'd-flex align-items-center py-1',
                    },
                    {
                      imgUrl: gram,
                      text: 'صلاحية 90 يوم',
                      className: 'd-flex align-items-center py-1',
                    },
                  ]}
                />
              </div>
              {(product?.hasVariations || product?.masterVariation) && (
                <div className="border-bottom py-2">
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
                </div>
              )}
              <div className="d-flex align-items-center pt-3">
                {children}
                <FavoriteForm product={product!} enableActionNotification={true} />
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default HCardMaker;
