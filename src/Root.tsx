import { CSSProperties, useRef, useState } from "react";
import { Presentation } from "./Presentation";
import { Player, PlayerRef } from "@remotion/player";

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: 10,
  width: "20%",
};

export const RemotionRoot: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);
  const [text, setText] = useState("");

  const updateText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div style={styles}>
      <input placeholder="Animation text" onChange={updateText} />
      <Player
        ref={playerRef}
        component={Presentation}
        compositionWidth={800}
        compositionHeight={450}
        controls
        durationInFrames={30 * 60}
        fps={60}
        inputProps={{ text }}
      />
    </div>
  );
};
