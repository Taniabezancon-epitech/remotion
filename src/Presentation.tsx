import { Fragment } from "react";
import { AbsoluteFill, Sequence } from "remotion";

interface PresentationProps {
  text: string;
}

export const Presentation: React.FC<PresentationProps> = ({ text }) => {
  return (
    <Fragment>
      <AbsoluteFill style={{ background: "white" }}>
        <Sequence from={0} durationInFrames={1800}>
          <h1>{text}</h1>
        </Sequence>
      </AbsoluteFill>
    </Fragment>
  );
};

export default Presentation;
