import React from "react";
import CTA from "./cta";
import MeetTheTeam from "./MeetTheTeam";

const SliceZone = ({ sliceZone }) => (
  <>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case "cta":
          return <CTA slice={slice} key={`slice-${index}`} />;
        case "meet_the_team":
          return <MeetTheTeam slice={slice} key={`slice-${index}`} />;
        default:
          return null;
      }
    })}
  </>
);

export default SliceZone;
