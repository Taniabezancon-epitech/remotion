import { Fragment } from "react";
import { AbsoluteFill, Img, Sequence } from "remotion";
import { Title } from "./Components/Title";

interface Slide {
  id: number;
  title: string;
  avatar: string;
  description: string;
  by: string;
}

interface PresentationProps {
  data: Slide[];
  text: string;
  color: string;
  currentSlideIndex?: number;
  lastSlideIndex: number;
}

export const Presentation: React.FC<PresentationProps> = ({
  data,
  text,
  color,
  currentSlideIndex,
  lastSlideIndex,
}) => {
  const durationInFrames = 200;
  const avatarWidth = "10%";
  const startSlideIndex = lastSlideIndex > 0 ? lastSlideIndex + 1 : 0;

  return (
    <AbsoluteFill style={{ background: "#F8F8F8" }}>
      {currentSlideIndex !== undefined ? (
        <Fragment>
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <Title
              titleText={data[currentSlideIndex].title}
              titleColor={color}
            />
            <Img
              src={data[currentSlideIndex].avatar}
              style={{
                width: avatarWidth,
                marginTop: "60px",
                marginBottom: "20px",
              }}
            />
            <h3 style={{ marginTop: "20px" }}>
              {data[currentSlideIndex].description}
            </h3>
            <h3 style={{ fontWeight: "normal", margin: "5px 0 0" }}>
              {data[currentSlideIndex].by}
            </h3>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {data.slice(startSlideIndex).map((slide: Slide, index: number) => (
            <Sequence
              key={slide.id}
              from={(index + startSlideIndex) * durationInFrames}
              durationInFrames={durationInFrames}
              fadeOut
            >
              <Fragment>
                <Title titleText={slide.title} titleColor={color} />
                <div style={{ textAlign: "center", marginTop: "100px" }}>
                  <Img src={slide.avatar} style={{ width: avatarWidth }} />
                </div>
              </Fragment>
            </Sequence>
          ))}
        </Fragment>
      )}
    </AbsoluteFill>
  );
};
