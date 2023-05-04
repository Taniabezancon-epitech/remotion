import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Title: React.FC<{
  titleText: string;
}> = React.memo(({ titleText }) => {

  return <AbsoluteFill style={{ background: "white" }} />;

});
