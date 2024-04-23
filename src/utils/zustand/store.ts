import { create } from 'zustand';
import { addToCart, getCartData, removeItemFromCart } from '../fetch-data';
import type { CartType } from '../../core/api/graphql/types';

type store = {
  cart: CartType | null;
  error: boolean;
  getCart: () => void;
  addToCart: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

const useStore = create<store>((set, get) => ({
  cart: null,
  error: false,
  getCart: () => {
    getCartData().then(data => {
      if (data.error) {
        set({ error: true });
      } else {
        set({ cart: data.items });
      }
    });
  },

  addToCart: (id, quantity) => {
    addToCart(id, quantity);
    get().getCart();
  },

  removeItem: id => {
    removeItemFromCart(id);
    get().getCart();
  },

  removeAll: () => set({ cart: null }),
}));
export default useStore;
