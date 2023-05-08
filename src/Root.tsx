import { CSSProperties, useRef, useState } from "react";
import { Presentation } from "./Presentation";
import { Player, PlayerRef } from "@remotion/player";
import { slidesData } from "./Shared/data";
import { buttonStyles, inputStyles, rectangleStyles } from "./Shared/styles";
import ButtonGroup from "./Components/Player/ButtonGroup";

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: 10,
  width: "20%",
};

const colors = ["Green", "Blue", "Yellow", "Gray"];

export const RemotionRoot: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [showImage, setShowImage] = useState(false);

  const updateText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const changeColor = (newColor: string) => {
    setColor(newColor);
  };

  const toggleImage = () => {
    setShowImage(!showImage);
  };

  return (
    <div style={styles}>
      <input
        style={inputStyles}
        placeholder="Animation text"
        onChange={updateText}
      />
      <ButtonGroup colors={colors} onClick={changeColor} />
      <button
        style={{ ...buttonStyles, backgroundColor: "Gray" }}
        onClick={toggleImage}
      >
        {showImage ? "Hide track" : "Show track"}
      </button>
      {showImage && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={rectangleStyles}>
            <h1 style={{ color: color }}>{text}</h1>{" "}
          </div>
        </div>
      )}
      <Player
        ref={playerRef}
        component={Presentation}
        compositionWidth={800}
        compositionHeight={450}
        controls
        durationInFrames={30 * 60}
        fps={60}
        inputProps={{ slidesData, text, color }}
      />
    </div>
  );
};
