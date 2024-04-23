import graphqlClient  from "../../../client";
import mutationDocument from "./changePassword";
import type {
  IdentityResultType,
  InputChangePasswordType,
  Mutations,
  MutationsChangePasswordArgs,
} from "../../../../graphql/types";

export default async function resetPasswordByToken(payload: InputChangePasswordType): Promise<IdentityResultType> {
  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "changePassword">>, MutationsChangePasswordArgs>(
    {
      mutation: mutationDocument,
      variables: {
        command: payload,
      },
    },
  );

  return data!.changePassword;
}
