import { Fragment } from "react";
import { AbsoluteFill, Img, Sequence } from "remotion";
import { ColorBars } from "./Components/ColorBars";
import { Title } from "./Components/Title";

interface Slide {
  id: number;
  title: string;
  color: string;
  avatar: string;
  by: string;
  description: string;
}

interface PresentationProps {
  slidesData: Slide[];
  text: string;
  color: string;
}

export const Presentation: React.FC<PresentationProps> = ({
  slidesData,
  text,
  color,
}) => {
  const durationInFrames = 200;
  const avatar = { width: "30%" };

  return (
    <Fragment>
      <AbsoluteFill style={{ background: "white" }}>
        {slidesData.map((slide: Slide, index: number) => (
          <Sequence
            key={slide.id}
            from={index * durationInFrames}
            durationInFrames={durationInFrames}
            fadeOut
          >
            <ColorBars />
            <h1
              style={{
                marginTop: 150,
                marginLeft: 120,
                color: color,
                position: "absolute",
              }}
            >
              {text}
            </h1>
            <Title titleText={slide.title} titleColor={color} />
            <div
              style={{
                position: "absolute",
                marginTop: 150,
                marginLeft: 250,
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Img src={slide.avatar} style={avatar} />
            </div>
          </Sequence>
        ))}
      </AbsoluteFill>
    </Fragment>
  );
};

export default Presentation;
