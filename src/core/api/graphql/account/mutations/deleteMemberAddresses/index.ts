import graphqlClient  from "../../../client";
import mutationDocument from "./deleteMemberAddressesMutation";
import type { InputMemberAddressType, Mutations, MutationsDeleteMemberAddressesArgs } from "../../../../graphql/types";

export default async function deleteMemberAddresses(
  addresses: InputMemberAddressType[],
  memberId: string,
): Promise<void> {
  await graphqlClient.mutate<Required<Pick<Mutations, "deleteMemberAddresses">>, MutationsDeleteMemberAddressesArgs>({
    mutation: mutationDocument,
    variables: {
      command: {
        memberId,
        addresses,
      },
    },
  });
}
