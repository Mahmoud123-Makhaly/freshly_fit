import {
  ChangeCartItemQuantityOptionsType,
  addItemToCart,
  changeCartItemQuantity,
  getCart,
  getCategory,
  getOrders,
  getOrder,
  getProduct,
  removeCartItem,
  searchProducts,
  addOrUpdateCartShipment,
  createOrderFromCart,
} from '../core/api/graphql/index';
import { InputShipmentType } from '../core/api/graphql/types';
import { setGlobals } from '../core/globals';

setGlobals({
  storeId: 'alkhbaz',
  cultureName: 'ar-EG',
  currencyCode: 'EGP',
  userId: '156',
  catalogId: `${process.env.NEXT_PUBLIC_CatalogId}`,
});

export const getProducts = async (itemsPerPage: number, page: number, filter: string) => {
  let items;
  let error;
  try {
    const data = await searchProducts(
      {
        page: page,
        itemsPerPage: itemsPerPage,
        categoryId: filter,
      },
      { withFacets: true },
    );
    items = data;
  } catch (err) {
    error = err;
  }
  return { items, error };
};

export const getCategories = async () => {
  let items;
  let error;
  try {
    const categories = await getCategory({
      maxLevel: 2,
      onlyActive: true,
    });
    items = categories;
  } catch (err) {
    error = err;
  }
  return { items, error };
};

export const getProductDetails = async (slug: string) => {
  let items;
  let error;
  try {
    const res = await getSeoInfo(slug[slug.length - 1]);
    const productDetails = await getProduct(res[0].objectId);
    items = productDetails;
  } catch (err) {
    error = err;
  }
  return { items, error };
};

export const getSeoInfo = async (slug: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/seoinfos/${slug}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  } catch (error) {}
};

export const addToCart = async (productId: string, quantity: number) => {
  let items;
  let error;
  try {
    const data = await addItemToCart(productId, quantity);
    items = data;
  } catch (err) {
    error = err;
  }
  return { items, error };
};

export const updateCartItemQuantity = async (
  lineItemId: string,
  quantity: number,
  options?: ChangeCartItemQuantityOptionsType,
) => {
  let items;
  let error;
  try {
    const data = await changeCartItemQuantity(lineItemId, quantity, options);
    items = data;
  } catch (err) {
    error = err;
  }
  return { items, error };
};

export const removeItemFromCart = async (lineItemId: string) => {
  let items;
  let error;
  try {
    const data = await removeCartItem(lineItemId);
    items = data;
  } catch (err) {
    error = err;
  }
  return { items, error };
};

export const getCartData = async () => {
  let items;
  let error;
  try {
    const data = await getCart();
    items = data;
  } catch (err) {
    error = err;
  }
  return { items, error };
};
// get current orders
export const getCurrentOrders = async () => {
  let items;
  let error;
  try {
    const data = await getOrders();
    items = data;
  } catch (err) {
    error = err;
  }
  return { items, error };
};
//  get invoice details
export const getInvoiceDetails = async (id: string) => {
  let items;
  let error;
  try {
    const data = await getOrder({ id: id });
    items = data;
  } catch (err) {
    error = err;
  }
  return { items, error };
};

export const addOrUpdateCartAddress = (cartId: string, shipment?: InputShipmentType) => {
  let items;
  let error;
  const Address = {
    countryName: 'Egypt',
    city: 'cairo',
    line1: '48 شارع عبدالمنعم رياض',
    firstName: 'AbuAlhamd',
    lastName: 'AbuAlhamd',
    phone: '011111111',
    name: 'AbuAlhamd',
    postalCode: '11511',
    addressType: 3,
  };
  try {
    const data = addOrUpdateCartShipment({ deliveryAddress: Address }, cartId);
    items = data;
  } catch (err) {
    error = err;
  }
  return { items, error };
};

export const createOrder = (cartId: string) => {
  let items;
  let error;
  try {
    const data = createOrderFromCart(cartId);
    items = data;
  } catch (err) {
    error = err;
  }
  return { items, error };
};
