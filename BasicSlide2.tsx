import React from "react";
import { Img, Sequence } from "remotion";
import { By } from "./src/Components/By";
import CheckboxOptions from "./src/Components/CheckBoxOption";
import { ColorBars } from "./src/Components/ColorBars";
import { Description } from "./src/Components/Description";
import { Title } from "./src/Components/Title";
import { slidesData } from "./src/Shared/data";
import { avatar } from "./src/Shared/styles";

export const BasicSlide2 = React.memo(() => {
  return (
    <div style={{ flex: 1, textAlign: "center", backgroundColor: "white" }}>
      {slidesData.map((slide: Slide, index: number) => (
        <Sequence
          key={slide.id}
          from={index * 60}
          durationInFrames={60}
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
