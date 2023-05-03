import React from "react";
import { Composition } from "remotion";
import { Presentation } from "./Presentation";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="BasicWorkflow"
        component={Presentation}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      />
      {/* <Composition
        id="BasicWorkflow2"
        component={BasicSlide2}
        durationInFrames={300}
        fps={30}
        width={1920}
        height={1080}
      /> */}
    </>
  );
};

export default RemotionRoot;
