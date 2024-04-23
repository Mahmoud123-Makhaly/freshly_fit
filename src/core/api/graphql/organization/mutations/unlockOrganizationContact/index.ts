import graphqlClient  from "../../../client";
import mutationDocument from "./unlockOrganizationContact";
import type { ContactType, Mutations, MutationsUnlockOrganizationContactArgs } from "../../../../graphql/types";

export default async function unlockOrganizationContact(userId: string): Promise<ContactType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "unlockOrganizationContact">>,
    MutationsUnlockOrganizationContactArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: { userId },
    },
  });

  return data!.unlockOrganizationContact;
}
