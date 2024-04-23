import graphqlClient  from "../../../client";
import mutationDocument from "./updateContactMutation";
import type { InputUpdateContactType, Mutations, MutationsUpdateContactArgs } from "../../../../graphql/types";

export default async function updateContact(contact: InputUpdateContactType): Promise<void> {
  await graphqlClient.mutate<Required<Pick<Mutations, "updateContact">>, MutationsUpdateContactArgs>({
    mutation: mutationDocument,
    variables: {
      command: contact,
    },
  });
}
