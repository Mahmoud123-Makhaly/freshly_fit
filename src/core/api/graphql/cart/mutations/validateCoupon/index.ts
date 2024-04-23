import { globals } from "../../../../../globals";
import graphqlClient  from "../../../client";
import mutationDocument from "./validateCouponMutation";
import type { Mutations, MutationsValidateCouponArgs } from "../../../../graphql/types";

export async function validateCoupon(coupon: string): Promise<boolean> {
  const { storeId, userId, cultureName, currencyCode } = globals;

  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "validateCoupon">>, MutationsValidateCouponArgs>(
    {
      mutation: mutationDocument,
      variables: {
        command: {
          storeId,
          userId,
          cultureName,
          currencyCode,
          coupon,
        },
      },
    },
  );

  return data!.validateCoupon;
}
