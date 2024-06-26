import graphqlClient  from "../../../client";
import mutationDocument from "./lockOrganizationContact";
import type { ContactType, Mutations, MutationsLockOrganizationContactArgs } from "../../../../graphql/types";

export default async function lockOrganizationContact(userId: string): Promise<ContactType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "lockOrganizationContact">>,
    MutationsLockOrganizationContactArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: { userId },
    },
  });

  return data!.lockOrganizationContact;
}
