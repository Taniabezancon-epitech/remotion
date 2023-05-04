import { Fragment } from "react";
import { AbsoluteFill, Sequence } from "remotion";
interface PresentationProps {
  text: string;
  color: string;
}

export const Presentation: React.FC<PresentationProps> = ({ text, color }) => {
  const styles = {
    color: color,
    textAlign: "center",
    fontSize: "3rem",
    fontWeight: "bold",
  };

  return (
    <Fragment>
      <AbsoluteFill style={{ background: "white" }}>
        <Sequence from={0} durationInFrames={1800}>
          <h1 style={styles}>{text}</h1>
        </Sequence>
      </AbsoluteFill>
    </Fragment>
  );
};

export default Presentation;
