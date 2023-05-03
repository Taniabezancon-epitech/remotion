import { FC } from "react";
import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const ColorBar: FC<{ color: string; index: number }> = ({
  color,
  index,
}) => {
  const { width } = useVideoConfig();
  const barHeight = 50;
  const barWidth = width / 5;
  const barLeft = barWidth * index;
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 3], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        backgroundColor: color,
        width: barWidth,
        height: barHeight,
        left: barLeft,
        position: "fixed",
      }}
    />
  );
};
