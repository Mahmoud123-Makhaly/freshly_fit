'use client';

import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import toast from 'react-hot-toast';
import { Rating as Rate } from 'primereact/rating';

import { ButtonMaker, Counter, FavoriteForm, Properties, Slider, Variation, AccordionFlush } from '@components';
import { useTranslate } from '@app/hooks';
import { useStore } from '@utils';
import gram from '@assets/images/gram.svg';
import facebook from '@assets/images/footer/facebook.svg';
import instagram from '@assets/images/footer/instagram.svg';
import whatsApp from '@assets/images/footer/whatsApp.svg';
import x from '@assets/images/footer/x.svg';
import { useRouter } from '@navigation';
import { DTO } from '@tot/core/types';

import SubProductDetails from './SubProductDetails';
import ShareInSocial from './ShareInSocial';

interface IDetailsProps {
  product: DTO.IProductDTO | undefined;
}

const Details = (props: IDetailsProps) => {
  const { product } = props;
  const [count, setCount] = useState(1);
  const zuStore = useStore();
  const t = useTranslate('COMP_ProductDetails.Details');
  const router = useRouter();

  const handleAddToCart = async (id: string) => {
    zuStore.addToCart(id, count);
    if (zuStore.error) {
      toast.error(t('ADD_TO_CART_ERROR'));
    } else {
      toast.success(t('ADD_TO_CART_MESSAGE_SUCCESSFUL'));
    }
  };

  const handleVariantSelection = (variant: DTO.IVariationTypeDTO) => {
    router.push(`/product/${variant.slug}`);
  };

  return (
    <React.Fragment>
      <section>
        <Row>
          <Col md={5}>
            {product?.images && (
              <Slider
                images={product?.images?.map(img => {
                  return img.url;
                })}
              />
            )}
          </Col>
          <Col md={7}>
            <div className="border-bottom pb-3">
              <h3 className="fw-bold">{product?.name}</h3>
              <div className="pb-2 flex-start">
                <div className="me-2 product-rate">
                  <Rate value={5} cancel={false} readOnly />
                </div>
                <div>
                  <p>20 تقييم</p>
                </div>
              </div>
              <h3 className="fw-bold">{product?.price?.actual?.formattedAmount}</h3>
            </div>
            {product?.description && (
              <div className="border-bottom py-3">
                <h4 className="text-muted m-0 p-0 text-break">{product?.description}</h4>
              </div>
            )}
            <div className="border-bottom py-3">
              <Properties
                data={[
                  {
                    imgUrl: gram,
                    text: '350 جرام',
                    className: 'd-flex  text-info align-items-center',
                  },
                  {
                    imgUrl: gram,
                    text: 'خالى من دقيق القمح ومشتقاته',
                    className: 'd-flex text-info align-items-center',
                  },
                  {
                    imgUrl: gram,
                    text: 'صلاحية 90 يوم',
                    className: 'd-flex text-info align-items-center',
                  },
                ]}
              />
            </div>
            <div className="py-3 ">
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
            <div className="py-3 ">
              <p className="text-muted px-3 py-2 rounded delivery-time">{t('DELIVERY_TIME')}</p>
            </div>
            <div>
              <ShareInSocial
                images={[
                  {
                    imgSrc: facebook,
                    href: '#',
                  },
                  {
                    imgSrc: whatsApp,
                    href: '#',
                  },
                  {
                    imgSrc: instagram,
                    href: '#',
                  },
                  {
                    imgSrc: x,
                    href: '#',
                  },
                ]}
                title={t('SHARE')}
              />
            </div>
            <div className="d-flex align-items-center">
              <div>
                <Counter count={count} setCount={setCount} />
              </div>
              <div className="flex-grow-1 px-2 ">
                <ButtonMaker block={true} text={t('ADD_TO_CART_BTN')} design="add-to-cart" onClick={handleAddToCart} />
              </div>
              <div>
                <FavoriteForm product={product!} enableActionNotification={true} />
              </div>
            </div>
          </Col>
        </Row>
      </section>
      <section className="my-4 product-details-accordion">
        <Row>
          <Col>
            <AccordionFlush
              items={[{ header: t('DETAILS'), content: <SubProductDetails /> }]}
              headerClass="p-details-accordion"
            />
          </Col>
        </Row>
      </section>
    </React.Fragment>
  );
};

export default Details;
