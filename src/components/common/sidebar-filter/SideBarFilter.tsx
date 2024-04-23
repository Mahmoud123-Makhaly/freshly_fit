'use client';

import React, { useEffect, useState } from 'react';
import { DTO } from '@tot/core/types';

import { AccordionFlush, ButtonMaker, PriceRange } from '@components';
import { useTranslate, useAppStore } from '@app/hooks';

import SidebarFilterItem from './SidebarFilterItem';

const SidebarFilter = ({
  facets,
  handleSearch,
}: {
  facets: {
    terms?: DTO.IFacetTermTypeDTO[] | undefined;
    sort?:
      | {
          label: string;
          term: string;
          isSelected: boolean;
        }[]
      | undefined;
    defaultPriceRange?: { from: string; to: string };
  };
  handleSearch: ({
    termFacet,
    sortTerm,
    page,
    pageSize,
    priceFrom,
    priceTo,
  }: {
    termFacet?: DTO.IFacetTermTypeDTO | 'NONE';
    sortTerm?: string;
    page?: number;
    pageSize?: 12 | 24 | 36;
    priceFrom?: string;
    priceTo?: string;
  }) => void;
}) => {
  const { changePreloader } = useAppStore(state => ({ changePreloader: state.layout.changePreloader }));
  const [facet, setFacet] = useState<
    { type: 'sort' | 'filter'; value: DTO.IFacetTermTypeDTO | 'NONE' | string } | undefined
  >();

  useEffect(() => {
    if (facet)
      switch (facet.type) {
        case 'filter':
          if (changePreloader) changePreloader('enable');
          handleSearch({ termFacet: facet.value as DTO.IFacetTermTypeDTO | 'NONE', page: 1 });
          break;
        case 'sort':
          if (changePreloader) changePreloader('enable');
          handleSearch({ sortTerm: facet.value as string });
          break;
      }
  }, [changePreloader, facet, handleSearch]);

  const t = useTranslate('COMP_SidebarFilter');

  return (
    <div className="sidebar-filter rounded d-none d-md-block" id="sidebar-filter">
      <h6 className="mx-2 my-2 fw-bold py-2 font-14  header">{t('SORT_BY')}</h6>
      {facets.sort?.map((term, indx) => (
        <SidebarFilterItem
          containerClassName={`${facet ? 'disabled' : ''}`}
          key={`sort-term-${indx}`}
          label={t(term.label)}
          id={term.term}
          name="product-sort-terms"
          type="radio"
          onChange={e => {
            setFacet({ type: 'sort', value: e.target.id });
          }}
          defaultChecked={term.isSelected}
        />
      ))}
      <h6 className="mx-2 my-3 fw-bold  header text-14">{t('CLASSIFICATION_BY')}</h6>
      <div>
        <AccordionFlush
          defaultOpen={facets.terms?.some(x => x.isSelected) ? ['products-facet-terms'] : undefined}
          items={[
            {
              header: (
                <React.Fragment>
                  <p className="products-header w-100">{t('PRODUCTS')}</p>
                  <ButtonMaker
                    tag="span"
                    text={t('DELETE')}
                    design="bg-transparent border-0 filter-accordion-header-btn text-end font-14 text-gray mx-3"
                    onClick={() => setFacet({ type: 'filter', value: 'NONE' })}
                  />
                </React.Fragment>
              ),
              content: facets.terms?.map((term, indx) => (
                <SidebarFilterItem
                  containerClassName={`${facet ? 'disabled' : ''}`}
                  key={`filter-term-${indx}`}
                  label={term.label}
                  id={term.term}
                  name="product-filter-terms"
                  type="checkbox"
                  onChange={e => {
                    setFacet({ type: 'filter', value: { ...term, isSelected: e.target.checked } });
                  }}
                  defaultChecked={term.isSelected}
                />
              )),
              id: 'products-facet-terms',
            },
            {
              header: (
                <React.Fragment>
                  <p className="products-header w-100">{t('PRICE')}</p>
                  <ButtonMaker
                    tag="span"
                    text={t('DELETE')}
                    design="bg-transparent border-0 filter-accordion-header-btn text-end font-14 text-gray mx-3"
                    onClick={() => handleSearch({ priceFrom: '0', priceTo: '0' })}
                  />
                </React.Fragment>
              ),
              content: (
                <div>
                  <PriceRange
                    onChange={(from: string, to: string) => handleSearch({ priceFrom: from, priceTo: to })}
                    defaultRange={{
                      from: facets?.defaultPriceRange?.from || '0',
                      to: facets?.defaultPriceRange?.to || '0',
                    }}
                  />
                </div>
              ),
              id: 'products-facet-price-term',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SidebarFilter;
