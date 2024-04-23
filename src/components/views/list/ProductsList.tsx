'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ReactPaginate from 'react-paginate';
import { Col, Row } from 'reactstrap';

import { BreadCrumb, HCardMaker, ButtonMaker, VCardMaker, ImageWithFallback } from '@components';
import filter from '@assets/images/icons/list/filter_alt.svg';
import { usePathname, useRouter } from '@navigation';
import { useTranslate, useAppStore } from '@app/hooks';
import { DTO } from '@tot/core/types';
import { Utils } from '@libs';

import ListView from './ListView';
import ListCount from './ListCount';
import Filter from './Filter';
import Empty from './Empty';

export interface ISelectedCat {
  value: string;
  label: string;
}
const ProductsList = ({ products }: { products: DTO.IProductConnectionDTO | undefined }) => {
  //
  const path = usePathname();
  const router = useRouter();
  const _query = useSearchParams();
  const [isMobileFilterOpen, setIsisMobileFilterOpen] = useState<boolean>(false);
  const { changePreloader } = useAppStore(state => ({ changePreloader: state.layout.changePreloader }));

  //Transfer term facet object to string
  //to make component to get the new search query and redirect page using the new values
  const handleSearch = ({
    termFacet,
    sortTerm,
    page,
    pageSize,
    priceFrom,
    priceTo,
    keyword,
  }: {
    termFacet?: DTO.IFacetTermTypeDTO | 'NONE';
    sortTerm?: string;
    page?: number;
    pageSize?: 12 | 24 | 36;
    priceFrom?: string;
    priceTo?: string;
    keyword?: string;
  }) => {
    const _buildFilter = () => {
      let _filter: string | null = _updatedQuery.filter ? _updatedQuery.filter : '';
      if ((!termFacet && !_filter) || termFacet === 'NONE') _filter = null;
      else if (termFacet && !termFacet.isSelected)
        _filter = _filter
          .split(',')
          .map(item => item.trim())
          .filter(term => term !== termFacet.term)
          .join(',');
      else if (termFacet && termFacet.isSelected) _filter += `,${termFacet.term}`;
      return _filter ? _filter?.replace(/^,\s*/, '') : null;
    };

    let _updatedQuery = {
      filter: _query.get('filter'),
      sort: _query.get('sort'),
      page: Number(_query.get('page')),
      pageSize: Number(_query.get('pageSize')),
      priceFrom: _query.get('priceFrom'),
      priceTo: _query.get('priceTo'),
      keyword: _query.get('keyword'),
    };
    _updatedQuery.filter = _buildFilter();

    _updatedQuery.sort = sortTerm ? sortTerm : _updatedQuery.sort;
    _updatedQuery.page = termFacet ? 1 : page ? page : _updatedQuery.page;
    _updatedQuery.pageSize = pageSize ? pageSize : _updatedQuery.pageSize;
    _updatedQuery.priceFrom = priceFrom ? (priceFrom === '0' ? '' : priceFrom) : _updatedQuery.priceFrom;
    _updatedQuery.priceTo = priceTo ? (priceTo === '0' ? '' : priceTo) : _updatedQuery.priceTo;
    _updatedQuery.keyword = keyword ? keyword : _updatedQuery.keyword;

    const queryStringExpression = Utils.generateQueryString(Utils.cleanEmptyAndZeros(_updatedQuery));
    if (queryStringExpression) router.push(`${path}${queryStringExpression}`);
  };

  //
  const [listView, setListView] = useState(true);
  const t = useTranslate('COMP_ProductsList');
  const listCountData = [
    {
      label: t('12_In_PAGE'),
      value: 12,
    },
    {
      label: t('24_In_PAGE'),
      value: 24,
    },
    {
      label: t('36_In_PAGE'),
      value: 36,
    },
  ];

  const handleAddToCart = async (id: string) => {};
  const getOutlineNamedFacets = products?.termFacets?.find(x => x.name === '__outline_named');

  useEffect(() => {
    if (products?.items && changePreloader) changePreloader('disable');
  }, [changePreloader, products?.items]);

  const enablePreLoader = () => {
    if (changePreloader) changePreloader('enable');
  };

  return (
    <div className="product-list">
      <Row>
        <Col>
          <div className="flex-between pt-4 pb-2">
            <BreadCrumb paths={['/', ...path.split('/').filter(Boolean)]} />
            <ButtonMaker design="bg-white border-border p-1 d-lg-none" onClick={() => setIsisMobileFilterOpen(true)}>
              <ImageWithFallback src={filter} alt="filter" className="w-auto" />
            </ButtonMaker>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="py-3">
          <p className="text-light-gray">{`${t('FOUND_ITEMS', { count: products?.totalCount })}`}</p>
          <div className="overflow-x-auto d-flex gap-3 d-lg-none">
            {getOutlineNamedFacets?.terms
              ?.filter(x => x.isSelected)
              ?.map((term, indx) => (
                <div
                  className="flex-between border border-primary px-1 rounded w-fit text-nowrap"
                  key={`filter-outline-named-term-${indx}`}
                >
                  <p className="text-primary">{term.label}</p>
                  <i
                    className="fa-regular fa-circle-xmark text-muted ps-2"
                    onClick={() => {
                      enablePreLoader();
                      handleSearch({ termFacet: { ...term, isSelected: false } });
                    }}
                  ></i>
                </div>
              ))}
          </div>
        </div>
        <Col lg={3}>
          <Filter
            isMobileFilterOpen={isMobileFilterOpen}
            setIsisMobileFilterOpen={setIsisMobileFilterOpen}
            facets={{
              terms: getOutlineNamedFacets?.terms,
              sort: products?.sort,
              defaultPriceRange: { from: _query.get('priceFrom') || '0', to: _query.get('priceTo') || '0' },
            }}
            handleSearch={handleSearch}
          />
        </Col>

        <Col lg={9} className="d-flex flex-col mb-4 px-0 ">
          {products?.items && products?.items.length > 0 && (
            <div className="w-100">
              <Row>
                <Col>
                  <div className="flex-between justify-content-lg-end w-100">
                    <div className="mb-2 mb-lg-0">
                      <ListCount
                        title={t('LIST_COUNT_TITLE')}
                        options={listCountData}
                        onChange={val => {
                          enablePreLoader();
                          handleSearch({ page: 1, pageSize: val as 12 | 24 | 36 | undefined });
                        }}
                        selectedValue={Number(_query.get('pageSize')) || 12}
                      />
                    </div>
                    <div className="text-start mb-2 mb-lg-0">
                      <ListView title={t('LIST_COUNT_TITLE')} listView={listView} setListView={setListView} />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          )}
          <Row className="g-3 w-100">
            {products?.items && products?.items.length > 0 ? (
              products?.items?.map(product =>
                listView === false ? (
                  <Col xl={3} lg={4} key={product?.id} className="px-2 card-column col-6">
                    <VCardMaker product={product}>
                      <ButtonMaker
                        block={true}
                        text={t('ADD_TO_CART_BTN')}
                        onClick={() => handleAddToCart(product.id)}
                      />
                    </VCardMaker>
                  </Col>
                ) : (
                  <Col key={product?.id} md={12}>
                    <HCardMaker product={product}>
                      <ButtonMaker
                        block={false}
                        text={t('ADD_TO_CART_BTN')}
                        design="px-4 flex-grow-1 flex-md-grow-0 me-2"
                        onClick={() => handleAddToCart(product.id)}
                      />
                    </HCardMaker>
                  </Col>
                ),
              )
            ) : (
              <Empty />
            )}
          </Row>
        </Col>
        {products?.items && products?.items.length > 0 && (
          <Col className="text-muted text-nowrap">
            <ReactPaginate
              containerClassName="react-paginate"
              breakLabel="..."
              nextLabel={t('NEXT_LABEL')}
              onPageChange={i => {
                enablePreLoader();
                handleSearch({ page: i.selected + 1 });
              }}
              pageRangeDisplayed={3}
              pageCount={Math.ceil(
                (products?.totalCount ? products?.totalCount : 1) / (Number(_query.get('pageSize')) || 12),
              )}
              previousLabel={t('PREV_LABEL')}
              renderOnZeroPageCount={null}
              forcePage={(Number(_query.get('page')) || 1) - 1}
            />
          </Col>
        )}
      </Row>
    </div>
  );
};
export default ProductsList;
