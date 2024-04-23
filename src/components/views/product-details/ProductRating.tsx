'use client';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useSession } from 'next-auth/react';

import { Actions } from '@libs/actions';
import { useTranslate, useAppStore } from '@app/hooks';
import { AccordionFlush, FormikValues, ProductReview, ShowMore } from '@components';
import { DTO } from '@tot/core/types';
import { usePathname, useRouter } from '@navigation';
import { Utils } from '@libs';

import RatingItem from './RatingItem';
import { FormikHelpers } from 'formik';

const ProductRating = ({
  product,
  productReview,
  pageSize,
}: {
  product: DTO.IProductDTO;
  productReview?: DTO.ICustomerReviewConnectionDTO;
  pageSize: number;
}) => {
  const t = useTranslate('COMP_ProductDetails.Rating');
  const { changePreloader } = useAppStore(state => ({ changePreloader: state.layout.changePreloader }));
  const [reviewOpen, setReviewOpen] = useState(!productReview?.items?.length);
  const { data: session } = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const [reviewsAvg, setReviewsAvg] = useState<{
    average: number;
    count: number;
  }>({ average: 0, count: 0 });
  const [page, setPage] = useState<{
    skip: number;
    take: number;
    reviews: Array<DTO.ICustomerReviewDTO> | [];
    pageInfo?: DTO.IPageInfoDTO;
  }>({
    skip: 0,
    take: pageSize,
    reviews: productReview?.items ?? [],
    pageInfo: productReview?.pageInfo,
  });

  useEffect(() => {
    if (page.reviews && page.reviews?.length > 0) {
      setReviewsAvg(
        Utils.calculateAverageRating(
          page.reviews.map(x => x.rating),
          5,
        ),
      );
    }
  }, [page.reviews]);

  const reloadReviews = async (skip: number, take: number) => {
    const {
      data: reviews,
      validationErrors,
      serverError,
    } = await Actions.products.getProductReviews({ productId: product.id, skip, take });

    if (reviews?.error || validationErrors || serverError) {
    } else if (reviews && reviews.data && reviews.data.items && reviews.data.items.length > 0) {
      setPage(prev => ({
        skip,
        take,
        reviews: skip === 0 ? reviews.data.items! : [...prev.reviews, ...reviews.data.items!],
        pageInfo: reviews.data.pageInfo,
      }));
    }
  };

  return (
    <section className="my-4 product-details-accordion">
      <Row>
        <Col>
          <AccordionFlush
            items={[
              {
                header: (
                  <div className="d-flex align-items-center w-100">
                    <div>{t('RATING')}</div>
                    {/* TODO: need to access and endpoint to get the whole value*/}
                    {/* <div className="mx-2 my-auto">
                      <Rate value={reviewsAvg.average} stars={5} cancel={false} readOnly />
                    </div>
                    <div>
                      <p>{`${reviewsAvg.count} ${t('REVIEW')}`}</p>
                    </div> */}
                    <span
                      className=" ms-5 px-3 py-2 rounded border font-14 text-primary"
                      onClick={e => {
                        e.stopPropagation();
                        if (session?.isAuthorized) setReviewOpen(true);
                        else {
                          changePreloader && changePreloader('enable');
                          router.push(`/auth/login?redirectURL=${pathName}`);
                        }
                      }}
                    >
                      {t('REVIEW_BTN')}
                    </span>
                  </div>
                ),
                content: (
                  <div className="rating">
                    {reviewOpen && session?.isAuthorized && (
                      <ProductReview
                        submitText={t('SEND')}
                        postSubmit={async () => {
                          await reloadReviews(0, pageSize);
                          setReviewOpen(false);
                        }}
                        entityId={product.id}
                        entityName={product.name}
                        entityType="Product"
                      />
                    )}

                    {page.reviews &&
                      page.reviews?.length > 0 &&
                      page.reviews.map(item => <RatingItem key={item.id} review={item} />)}

                    {page.pageInfo?.hasNextPage && (
                      <ShowMore
                        key={page.skip}
                        design="w-100 bg-white text-black watch-more fw-bold text-info mt-2"
                        take={page.take}
                        skip={page.skip}
                        onSubmit={async (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
                          await reloadReviews(values.skip, values.take);
                        }}
                      />
                    )}
                  </div>
                ),
              },
            ]}
            headerClass="p-details-accordion"
          />
        </Col>
      </Row>
    </section>
  );
};

export default ProductRating;
