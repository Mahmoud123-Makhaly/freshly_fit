'use client';

import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

import { useTranslate } from '@app/hooks';
import { DTO } from '@tot/core/types';
import { VCardMaker, ButtonMaker, HCardMaker, ListView } from '@components';

const Wishlist = ({ data }: { data: DTO.IWishlistTypeDTO }) => {
  const t = useTranslate('COMP_WishList');
  const [listView, setListView] = useState(true);

  const reload = () => {
    window.location.reload();
  };

  return (
    <Row>
      <Col className="d-flex flex-col mb-4 px-0 ">
        <div className="w-100">
          <Row>
            <Col>
              <div className="flex-between justify-content-lg-end w-100">
                <div className="text-start mb-2 mb-lg-0">
                  <ListView listView={listView} setListView={setListView} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="g-3 w-100">
          {data?.items?.map(lineItem =>
            listView === false ? (
              <Col xl={3} lg={4} key={lineItem.product?.id} className="px-2 card-column col-6">
                <VCardMaker product={lineItem.product!} reload={reload}>
                  <ButtonMaker block={true} text={t('ADD_TO_CART_BTN')} />
                </VCardMaker>
              </Col>
            ) : (
              <Col key={lineItem.product?.id} md={12}>
                <HCardMaker product={lineItem.product!} reload={reload}>
                  <ButtonMaker
                    block={false}
                    text={t('ADD_TO_CART_BTN')}
                    design={'px-4 flex-grow-1 flex-md-grow-0 me-2'}
                  />
                </HCardMaker>
              </Col>
            ),
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default Wishlist;
