import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { title, word } from "../Shared/styles";

export const Title: React.FC<{
  titleText: string;
}> = React.memo(({ titleText }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const words = titleText.split(" ");

  return (
    <h1 style={title}>
      {words.map((t, i) => {
        const delay = i * 5;

        const scale = spring({
          fps: videoConfig.fps,
          frame: frame - delay,
          config: {
            damping: 200,
          },
        });

        return (
          <span
            key={t}
            style={{
              ...word,
              color: "#212A3E",
              transform: `scale(${scale})`,
            }}
          >
            {t}
          </span>
        );
      })}
    </h1>
  );
});
