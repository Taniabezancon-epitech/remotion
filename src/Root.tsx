import { CSSProperties, useRef, useState } from "react";
import { Presentation } from "./Presentation";
import { Player, PlayerRef } from "@remotion/player";
import { slidesData } from "./Shared/data";

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: 10,
  width: "20%",
};

const buttonStyles: CSSProperties = {
  padding: 10,
  border: "none",
  backgroundColor: "#3F51B5",
  fontWeight: 600,
  borderRadius: 5,
  width: "100%",
  height: 60,
  fontSize: 18,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
  margin: 15,
};

const inputStyles: CSSProperties = {
  padding: 10,
  border: "none",
  color: "black", // Ajout de la propriété color avec la valeur "black"
  fontWeight: 600,
  borderRadius: 5,
  width: "20%",
  height: 60,
  fontSize: 18,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
  marginTop: 10,
  marginLeft: 300,
  position: "absolute",
};

const rectangleStyles: CSSProperties = {
  backgroundColor: "white",
  width: "400%",
  height: "100px",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-end",
  borderRadius: 5,
};

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ ...buttonStyles, backgroundColor: "Green" }}
          onClick={() => changeColor("Green")}
        />
        <button
          style={{ ...buttonStyles, backgroundColor: "Blue" }}
          onClick={() => changeColor("Blue")}
        />
        <button
          style={{ ...buttonStyles, backgroundColor: "Yellow" }}
          onClick={() => changeColor("Yellow")}
        />
        <button
          style={{ ...buttonStyles, backgroundColor: "Gray" }}
          onClick={toggleImage}
        >
          {showImage ? "Hide track" : "Show track"}
        </button>
      </div>
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
