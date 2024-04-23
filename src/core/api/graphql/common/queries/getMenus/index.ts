import { globals } from "../../../../../globals";
import  graphqlClient  from "../../../client";
import getMenusQueryDocument from "./getMenus";
import type { MenuLinkListType, Query, QueryMenusArgs } from "../../../../graphql/types";

export default async function getMenus(payload?: Partial<QueryMenusArgs>): Promise<MenuLinkListType[]> {
  const { storeId } = globals;

  const { data } = await graphqlClient.query<Required<Pick<Query, "menus">>, QueryMenusArgs>({
    query: getMenusQueryDocument,
    variables: {
      storeId,
      ...payload,
    },
  });

  return data.menus;
}
