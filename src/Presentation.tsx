import { Fragment } from "react";
import { AbsoluteFill, Img, Sequence } from "remotion";

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
  const avatar = { width: "10%", borderRadius: "50%" };

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
            {/* <ColorBars /> */}
            <h1 style={{ margin: 150, color: color }}>{text}</h1>
            {/* <Title titleText={text} titleColor={color}/> */}
            {/* <Title
              titleText={slide.title}
              titleColor={slide.color}
              avatar={slide.avatar}
              by={slide.by}
              description={slide.description} />
            <By
              titleText={slide.by}
              titleColor={slide.color}
              avatar={slide.avatar}
              by={slide.by}
              description={slide.description} />
            <Img src={slide.avatar} style={avatar} />
            {slide.id === 1 ? <CheckboxOptions /> : <Description />} */}
          </Sequence>
        ))}
      </AbsoluteFill>
    </Fragment>
  );
};

export default Presentation;
