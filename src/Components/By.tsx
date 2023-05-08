import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { by } from "../Shared/styles";

const word: React.CSSProperties = {
  // marginLeft: 10,
  // marginRight: 10,
  display: "inline-block",
};

export const By: React.FC<{
  titleText: string;
}> = React.memo(({ titleText }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const words = titleText.split(" ");

  return (
    <h1 style={by}>
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
              color: '#394867',
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
