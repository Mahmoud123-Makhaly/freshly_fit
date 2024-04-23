'use client';

import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { useTranslate } from '@app/hooks';
import { BreadCrumb, ButtonMaker, CartSummary, VCardMaker } from '@components';
import product from '@assets/images/home/product.svg';
import { useStore } from '@utils';
import { CartType } from '@core';
import { DTO } from '@tot/core/types';
import { Link } from '@navigation';

import CartItem from './CartItem';
import EmptyCart from './EmptyCart';

const ShoppingCart = () => {
  const zuStore = useStore();
  const [count, setCount] = useState<number>(0);
  const [cart, setCart] = useState<CartType | null>();
  const t = useTranslate('COMP_ShoppingCart');
  zuStore.getCart;
  const myCart = zuStore.cart;
  const getCart = () => {
    setCart(cart => (cart = myCart));
  };

  useEffect(() => {
    getCart();
  }, [myCart]);
  const TableData = [
    { text: t('SUBTOTAL'), price: cart?.subTotal?.formattedAmount },
    { text: t('DELIVERY_CHARGE'), price: cart?.shippingTotal?.formattedAmount },
    { text: t('TOTAL'), price: cart?.total?.formattedAmount },
  ];
  const data = [];
  for (let i = 0; i < 4; i++) {
    data.push({
      title: 'رقائق مشبعة شوفان',
      imgSrc: product,
      text: '50 سعر حراري',
      price: 'ج.م 100',
      hasIcon: 'fff',
      slug: '',
      btn: <ButtonMaker block={true} text={t('ADD_TO_CART_BTN')} />,
    });
  }

  const handleOnDelete = async (id: string) => {
    zuStore.removeItem(id);
    toast.success(t('DELETE_ITEM_SUCCESSFUL'));
    zuStore.getCart();
    getCart();
  };
  const handleOnSave = (id: string) => {
    toast.success(t('SAVE_ITEM_SUCCESSFUL'));
  };

  return (
    <div className="shopping-card">
      <Row>
        {cart?.itemsQuantity ? (
          <React.Fragment>
            <Col className="col-12 pt-4 pb-3">
              {/* <BreadCrumb title={t('BREAD_MAIN')} paths={[{ title: t('BREAD_SHOPPING_CART'), relativePath: '#' }]} /> */}
            </Col>
            <Col lg={8}>
              {cart?.items?.map((item, index) => (
                <CartItem
                  key={index}
                  setCount={setCount}
                  count={count}
                  data={item}
                  onDelete={handleOnDelete}
                  onSave={handleOnSave}
                />
              ))}
            </Col>
            <Col lg={3} className="col-12">
              <CartSummary title={t('CART_SUMMARY')} data={TableData}>
                <Link href={'/checkout'}>
                  <ButtonMaker block={true} text={t('COMPLETE_PURCHASE')} design="my-2">
                    <i className="fa-solid fa-chevron-left mx-1"></i>
                  </ButtonMaker>
                </Link>
              </CartSummary>
            </Col>
            <Row className="g-3 my-5">
              <h5 className="fw-bold my-3"> {t('SAVED_PRODUCTS')} </h5>

              {data &&
                data.map((row, index) => (
                  <Col md={6} lg={3} className="pb-4" key={index}>
                    <VCardMaker product={row as unknown as DTO.IProductDTO}>{row.btn}</VCardMaker>
                  </Col>
                ))}
            </Row>
          </React.Fragment>
        ) : (
          <EmptyCart />
        )}
      </Row>
    </div>
  );
};

export default ShoppingCart;
