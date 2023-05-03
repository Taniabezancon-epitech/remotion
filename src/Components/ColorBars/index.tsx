import { FC } from "react";
import { Sequence } from "remotion";
import { ColorBar } from "./ColorBar";

export const ColorBars: FC = () => {
  const colors = ["	#a7a7a7", "#b4b4b4", "#c0c0c0", " #cdcdcd", "#dadada"];

  return (
    <>
      {colors.map((color, index) => (
        <Sequence key={color} durationInFrames={100} from={index * 3}>
          <ColorBar key={color} color={color} index={index} />
        </Sequence>
      ))}
    </>
  );
};
