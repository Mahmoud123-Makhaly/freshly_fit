import graphqlClient  from "../../../client";
import mutationDocument from "./confirmEmail";
import type {
  CustomIdentityResultType,
  InputConfirmEmailType,
  Mutations,
  MutationsConfirmEmailArgs,
} from "../../../../graphql/types";

export default async function confirmEmailByToken(payload: InputConfirmEmailType): Promise<CustomIdentityResultType> {
  const { data } = await graphqlClient.mutate<Required<Pick<Mutations, "confirmEmail">>, MutationsConfirmEmailArgs>({
    mutation: mutationDocument,
    variables: {
      command: payload,
    },
  });

  return data!.confirmEmail;
}
