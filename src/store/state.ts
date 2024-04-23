import type { LayoutState } from './layout';
import { initialValues as LayoutInitialValues } from './layout';
import type { AppAccountState } from './app-user';
import { initialValues as AccountInitialValues } from './app-user';

export type StoreStates = LayoutState & AppAccountState;
export const StoreInitialValues = { ...LayoutInitialValues, ...AccountInitialValues };
