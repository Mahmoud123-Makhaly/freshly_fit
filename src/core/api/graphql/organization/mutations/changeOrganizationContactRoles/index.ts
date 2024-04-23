import graphqlClient  from "../../../client";
import mutationDocument from "./changeOrganizationContactRole";
import type {
  CustomIdentityResultType,
  InputChangeOrganizationContactRoleType,
  Mutations,
  MutationsChangeOrganizationContactRoleArgs,
} from "../../../../graphql/types";

export default async function changeOrganizationContactRole(
  payload: InputChangeOrganizationContactRoleType,
): Promise<CustomIdentityResultType | undefined> {
  const { data } = await graphqlClient.mutate<
    Required<Pick<Mutations, "changeOrganizationContactRole">>,
    MutationsChangeOrganizationContactRoleArgs
  >({
    mutation: mutationDocument,
    variables: {
      command: payload,
    },
  });

  return data?.changeOrganizationContactRole;
}
