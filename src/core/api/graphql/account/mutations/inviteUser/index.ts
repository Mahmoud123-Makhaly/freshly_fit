import graphqlClient  from "../../../client";
import mutationDocument from "./inviteUserMutation";
import type {
  CustomIdentityResultType,
  InputInviteUserType,
  Mutations,
  MutationsInviteUserArgs,
} from "../../../../graphql/types";

export default async function inviteUser(payload: InputInviteUserType): Promise<CustomIdentityResultType> {
  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "inviteUser">>, MutationsInviteUserArgs>({
    mutation: mutationDocument,
    variables: {
      command: payload,
    },
  });

  return data!.inviteUser;
}
