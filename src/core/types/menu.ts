export type ExtendedMenuLinkType = {
  id?: string;
  title?: string;
  icon?: string;
  children?: ExtendedMenuLinkType[];
  priority?: number;
  isCatalogItem?: boolean;
  route?: string
};
