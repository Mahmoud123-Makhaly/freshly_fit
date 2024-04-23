import { DTO } from '@tot/core/types';

export interface AppAccountState {
  appAccount: {
    user?: DTO.IUserDTO;
    defaultWishlistId?: string;
    setUser: (user: DTO.IUserDTO) => void;
    setDefaultWishlistId: (id: string) => void;
  };
}

export const initialValues: AppAccountState = {
  appAccount: { user: undefined, defaultWishlistId: undefined, setUser: () => {}, setDefaultWishlistId: () => {} },
};
