/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CastMemberFragment
// ====================================================

export interface CastMemberFragment_profile {
  __typename: "Image";
  url: string;
}

export interface CastMemberFragment {
  __typename: "CastMember";
  name: string;
  profile: CastMemberFragment_profile | null;
  order: number;
}
