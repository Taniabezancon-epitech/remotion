import React from "react";
import { useCurrentFrame } from "remotion";
import { description } from "../Shared/styles";

const DESCRIPTION_TEXT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const Description = React.memo(() => {
  return (
    <div
      style={description}
    >
      {DESCRIPTION_TEXT}
    </div>
  );
});
