'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Col, Input, Row } from 'reactstrap';
import toast from 'react-hot-toast';

import { ImageWithFallback } from '@components';
import { useRouter } from '@navigation';
import { Link } from '@navigation';
import { ButtonMaker, CartSummary, OrderRecap, ShippingAddress, Modal, AddAddress } from '@components';
import { useTranslate } from '@app/hooks';
import addAdress from '@assets/images/galaAdd0.svg';
import { useStore } from '@utils';
import { CartType, OrderAddressType } from '@core';

import PaymentMethod from './PaymentMethod';

const Checkout = () => {
  const inputRef = useRef<null | HTMLElement>(null);
  const t = useTranslate('COMP_Checkout');
  const [cart, setCart] = useState<CartType | null>();
  const [showEditAddressModal, setShowEditAddressModal] = useState(false);
  const [showAddAddressModal, setShowAdAddressModal] = useState(false);
  const router = useRouter();
  const zuStore = useStore();
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
    { text: t('DELIVERY_FEES'), price: cart?.shippingTotal?.formattedAmount },
    { text: t('TOTAL'), price: cart?.total?.formattedAmount },
  ];
  const toggleShow = () => {
    document.querySelector('.promo-btn')?.classList.add('d-none');
    document.querySelector('.promo-form')?.classList.remove('d-none');
    inputRef.current!.focus();
  };
  const handleRemoveCoupon = () => {
    document.querySelector('.promo-btn')?.classList.remove('d-none');
    document.querySelector('.promo-msg')?.classList.add('d-none');
  };
  const onApply = () => {
    document.querySelector('.promo-msg')?.classList.remove('d-none');
    document.querySelector('.promo-form')?.classList.add('d-none');
  };
  const onComplete = () => {
    router.push('/invoice/123');
  };
  const handleOnEditAddress = () => {
    setShowEditAddressModal(!showEditAddressModal);
  };

  const handleOnAddAddressModal = () => {
    setShowAdAddressModal(!showAddAddressModal);
  };
  const handleOnAddAddress = (data: any) => {
    toast.success(t('ADD_ADDRESS_SUCCESSFUL'));
    setShowAdAddressModal(false);
  };
  const btns = [
    <ButtonMaker
      key={'address-actions-0'}
      onClick={handleOnEditAddress}
      design="bg-white border-0  py-0 edit-btn d-flex align-items-center edit-btn"
    >
      <i className="fa-solid fa-pen mx-2 text-black icon"></i>
      <p className="text-info"> {t('EDIT')}</p>
    </ButtonMaker>,
    <ButtonMaker
      key={'address-actions-1'}
      design=" d-flex align-items-center  bg-white border-0 p-0"
      onClick={handleOnAddAddressModal}
    >
      <ImageWithFallback src={addAdress} alt={'add address'} width={0} height={0} className="w-auto px-2" />
      <p className="text-info">{t('ADD_NEW_ADDRESS')}</p>
    </ButtonMaker>,
  ];

  const shippingAddresses: Array<OrderAddressType> = [
    {
      id: 'a123',
      name: 'المنزل',
      firstName: 'محمد',
      lastName: 'علي',
      line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
      phone: '010085412714',
    },
    {
      id: 'b123',
      name: 'العمل',
      firstName: 'محمد',
      lastName: 'علي',
      line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
      phone: '010085412714',
    },
    {
      id: 'c123',
      name: 'المنزل',
      firstName: 'محمد',
      lastName: 'علي',
      line1: 'شقة 2 - مبنى 3, القاهرة الجديدة, القاهرة.',
      phone: '010085412714',
    },
  ];
  const selectAddress = useCallback(
    (id: string) => {
      const inp = document.getElementById(id) as HTMLInputElement | null;
      if (inp) {
        inp.defaultChecked = true;
        toast.success(t('ADDRESS_SELECTED'));
      }
      setTimeout(() => {
        setShowEditAddressModal(false);
      }, 1000);
    },
    [shippingAddresses],
  );

  return (
    <Row className="checkout">
      <Modal toggleShow={showEditAddressModal} size="lg">
        <div className="addresses">
          <div>
            <h5 className="mb-3 fw-bold">{t('SHIPPING_ADDRESSES')}</h5>
          </div>
          {shippingAddresses.map((address, index) => {
            return (
              <div className="my-3" key={index}>
                <ShippingAddress selectInput={selectAddress} data={address}>
                  <Input key={'active-address-0'} type="radio" name="address" id={address.id} />
                </ShippingAddress>
              </div>
            );
          })}

          <ButtonMaker block={true} text={t('CANCEL')} onClick={handleOnEditAddress} design="bg-white" />
        </div>
      </Modal>
      <Modal toggleShow={showAddAddressModal} size="lg">
        <h2>{t('ADD_ADDRESS_HEADER')}</h2>
        {/* Uncomment below line to start address implementation */}
        {/* <AddAddress onSubmit={handleOnAddAddress} onCancel={handleOnAddAddressModal} /> */}
      </Modal>

      <Col className="col-12 pt-4 pb-3">
        {/* <BreadCrumb
          title={t('BREAD_MAIN')}
          paths={[
            { title: t('BREAD_SHOPPING_CART'), relativePath: '#' },
            {
              title: t('BREAD_CHECKOUT'),
              relativePath: '#',
            },
          ]}
        /> */}
      </Col>

      <Col lg={8}>
        <div>
          <PaymentMethod data={[{ text: t('PAYMENT_CASH') }]} />
        </div>
        <div className="my-3 ">
          <div>
            <h5 className="mb-3 fw-bold">{t('SHIPPING_ADDRESSES')}</h5>
          </div>
          <ShippingAddress selectInput={() => {}} data={shippingAddresses[0]}>
            {btns}
          </ShippingAddress>
        </div>
        <div>
          <div>
            <h5 className="my-4 fw-bold"> {t('REVIEW_ORDER')}</h5>
          </div>
          <div>
            <OrderRecap data={cart} />
          </div>
        </div>
      </Col>
      <Col lg={3}>
        <div className="d-flex align-items-center border py-1 px-3 rounded mb-3">
          <Input name="radio1" type="checkbox" />
          <p className="mx-2 term-condition">
            {t('AGREE')}
            <Link href={'#'} className="text-primary text-decoration-underline">
              {t('TERMS_CONDITIONS')}
            </Link>
          </p>
        </div>
        <CartSummary title={t('CART_SUMMARY')} data={TableData}>
          <ButtonMaker
            block={true}
            text={t('Add_CODE')}
            design="my-2 text-dark bg-white promo-btn "
            onClick={toggleShow}
          />

          <div className="promo-form  d-none d-flex my-2">
            <input
              type="text"
              className="rounded w-100 promo-input mt-0 mb-0   my-2 border-primary"
              id="promo-input "
              ref={inputRef as any}
            />
            <ButtonMaker onClick={onApply} design="btn btn-primary ms-2 text-white apply-btn" block={false}>
              {t('APPLY')}
            </ButtonMaker>
          </div>
          <div className="text-center border rounded my-3 py-2   d-none promo-msg">
            <p className="m-0 p-0">
              {t('APPLIED')}
              <span className="text-primary mx-1">{t('DISCOUNT')} </span> {t('SUCCESSFULLY')}!
            </p>
            <p className="m-0 p-0">
              {t('SAVED')} <span className="text-primary">59 {t('CURRENCY')}</span>
              <ButtonMaker
                block={false}
                text={t('REMOVE_COUPON')}
                design="bg-white border-0 text-decoration-underline coupon-btn"
                onClick={handleRemoveCoupon}
              />
            </p>
          </div>
          <ButtonMaker
            onClick={onComplete}
            block={true}
            text={t('COMPLETE_PURCHASE')}
            design="my-2 text-white checkout-btn"
          ></ButtonMaker>
        </CartSummary>
      </Col>
    </Row>
  );
};

export default Checkout;
