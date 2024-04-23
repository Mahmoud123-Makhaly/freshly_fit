import graphqlClient  from "../../../client";
import mutationDocument from "./registerByInvitationMutation";
import type {
  CustomIdentityResultType,
  InputRegisterByInvitationType,
  Mutations,
  MutationsRegisterByInvitationArgs,
} from "../../../../graphql/types";

export default async function registerByInvitation(
  payload: InputRegisterByInvitationType,
): Promise<CustomIdentityResultType> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "registerByInvitation">>,
    MutationsRegisterByInvitationArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: payload,
    },
  });

  return data!.registerByInvitation;
}
