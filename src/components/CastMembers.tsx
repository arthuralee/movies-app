import React from "react";
import "./CastMembers.css";
import gql from "graphql-tag";

import { CastMemberFragment } from "./__generated__/CastMemberFragment";
import Image from "./Image";

export const castMemberFragment = gql`
  fragment CastMemberFragment on CastMember {
    id
    name
    profile {
      url
    }
    order
  }
`;

export default function CastMembers({
  cast,
}: {
  cast: CastMemberFragment[] | null;
}) {
  return (
    <div>
      {cast && cast.length ? (
        <div className="cast-outer-container">
          <div className="fade" />
          <div className="cast-container">
            {cast
              .sort((a, b) => a?.order - b?.order)
              .map((member) => (
                <div className="cast-item" key={member.id}>
                  <Image src={member.profile?.url} alt={member.name} />
                  <div className="name">{member.name}</div>
                </div>
              ))}
            <div className="spacer" />
          </div>
        </div>
      ) : (
        <div>No known cast members</div>
      )}
    </div>
  );
}
