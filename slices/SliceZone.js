import React from "react";
import CTA from "./cta";

const SliceZone = ({ sliceZone }) => (
  <>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case "cta":
          return <CTA slice={slice} key={`slice-${index}`} />;
        default:
          return null;
      }
    })}
  </>
);

export default SliceZone;
