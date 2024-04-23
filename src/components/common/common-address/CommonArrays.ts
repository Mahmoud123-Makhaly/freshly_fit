import { OrderAddressType } from '@core';
import { ICartSummaryDataProps } from '../index';

export const CommonAddress: Array<OrderAddressType> = [
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
export const cartData: Array<ICartSummaryDataProps> = [
  { text: 'subtotal', price: 30 },
  { text: 'Delivery fees', price: 20 },
  { text: 'total', price: 261 },
];
