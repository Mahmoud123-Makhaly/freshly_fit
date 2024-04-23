import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import { ButtonMaker, ImageWithFallback } from '@components';
import { Link } from '@navigation';
import { useTranslate } from '@app/hooks';
import { CartType } from '@core';
import { useStore } from '@utils';
import noImg from '@assets/images/product/noimg.svg';
import rec from '@assets/images/icons/rec.svg';
import ShoppingIcon from '@assets/images/icons/cart.svg';

import ShoppingItem from './ShoppingItem';

const ShoppingCartDropdown = () => {
  const zuStore = useStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const t = useTranslate('COMP_TopBar.COMP_ShoppingCartDropdown');
  zuStore.getCart;
  const myCart = zuStore.cart;
  const [cart, setCart] = useState<CartType | null>(myCart);

  const getCart = () => {
    setCart(cart => (cart = myCart));
  };

  useEffect(() => {
    getCart();
  }, [myCart]);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  const handleOnDelete = async (id: string) => {
    zuStore.removeItem(id);
    getCart();
    if (zuStore.error) {
      toast.error('try again');
    } else {
      toast.success('Item was deleted successfully');
    }
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="shopping-cart position-relative">
      <DropdownToggle caret className="bg-white text-info dropdown-toggle p-0" style={{ border: '0' }}>
        <span className="position-relative">
          <ImageWithFallback src={ShoppingIcon} alt="shoppingcart" width={0} height={0} className="cart-icon pe-0" />
          {cart?.itemsQuantity!! > 0 && <span className="count rounded-circle"> {cart?.itemsQuantity}</span>}
        </span>
        <span className="d-none d-lg-inline-block mx-1 nav-link"> {t('SHOPPING_CART')} </span>
      </DropdownToggle>
      <DropdownMenu className="shopping-dropdown-menu">
        <ImageWithFallback
          src={rec}
          alt="rec"
          width={0}
          height={0}
          className="rec-img position-absolute start-50 translate-middle-x"
        />
        <DropdownItem header className="text-black header py-0">
          {cart?.itemsQuantity ? cart.itemsQuantity : 0} {t('PRODUCT')}
        </DropdownItem>
        {cart?.itemsQuantity === undefined && (
          <ImageWithFallback src={noImg} alt={'no'} width={0} height={0} style={{ width: '100%', height: '100%' }} />
        )}

        {cart?.itemsQuantity && (
          <>
            <DropdownItem text>
              <div className="shopping-items-container">
                {cart?.items?.map((item, index) => {
                  return (
                    <ShoppingItem
                      key={index}
                      imgUrl={item?.imageUrl ? item?.imageUrl : noImg}
                      weight={item?.weight}
                      title={item?.name}
                      price={item?.listPrice?.formattedAmount}
                      onDelete={() => handleOnDelete(item.id)}
                    />
                  );
                })}
              </div>
            </DropdownItem>
            <DropdownItem text className="py-0">
              <div className="shopping-total-count border rounded d-flex justify-content-between ">
                <p className="mb-0  ">{t('TOTAL')}</p>
                <p className="mb-0  ">{cart?.total?.formattedAmount}</p>
              </div>
            </DropdownItem>
            <div className="shopping-btns d-flex justify-content-between w-100 px-2">
              <Link href={'/checkout'} className={`text-white w-50 px-2`}>
                <ButtonMaker block design="rounded" onClick={toggle}>
                  {t('COMPLETE_PURCHASE')}
                </ButtonMaker>
              </Link>

              <Link href={'/cart'} className="text-white w-50  px-2">
                <ButtonMaker block outline design="rounded" onClick={toggle}>
                  {t('SHOPPING_CART')}
                </ButtonMaker>
              </Link>
            </div>
          </>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ShoppingCartDropdown;
