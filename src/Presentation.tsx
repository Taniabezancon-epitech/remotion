import { Img, Sequence } from "remotion";
import { Title } from "./Components/Title";
import { slidesData, Slide } from "./Shared/data";
import { By } from "./Components/By";
import { avatar } from "./Shared/styles";
import { Description } from "./Components/Description";
import React from "react";
import { ColorBars } from "./Components/ColorBars";
import CheckboxOptions from "./Components/CheckBoxOption";

export const Presentation = React.memo(() => {
  const durationInFrames = 60
  
  return (
    <div style={{ flex: 1, textAlign: "center", backgroundColor: "white" }}>
      {slidesData.map((slide: Slide, index: number) => (
        <Sequence
          key={slide.id}
          from={index * durationInFrames}
          durationInFrames={durationInFrames}
          fadeOut
        >
          <ColorBars />
          <Title
            titleText={slide.title}
            titleColor={slide.color}
            avatar={slide.avatar}
            by={slide.by}
            description={slide.description}
          />
          <By
            titleText={slide.by}
            titleColor={slide.color}
            avatar={slide.avatar}
            by={slide.by}
            description={slide.description}
          />
          <Img src={slide.avatar} style={avatar} />
          {slide.id === 1 ? <CheckboxOptions /> : <Description />}
        </Sequence>
      ))}
    </div>
  );
});
