import graphqlClient  from "../../../client";
import mutationDocument from "./createUser";
import type {
  IdentityResultType,
  InputCreateApplicationUserType,
  Mutations,
  MutationsCreateUserArgs,
} from "../../../../graphql/types";

export default async function createUser(user: InputCreateApplicationUserType): Promise<IdentityResultType> {
  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "createUser">>, MutationsCreateUserArgs>({
    mutation: mutationDocument,
    variables: {
      command: { applicationUser: user },
    },
  });

  return data!.createUser;
}