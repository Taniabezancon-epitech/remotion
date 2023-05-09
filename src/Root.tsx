import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { Player, PlayerRef } from "@remotion/player";
import { Presentation } from "./Presentation";
import { approvalSlides, rejectedSlides, Slide, slidesData } from "./Shared/data";
import { ButtonGroup } from "./Components/Player/ButtonGroup";
import { ColorPicker } from "./Components/Player/ColorPicker";
import { TextInput } from "./Components/Player/TextInput";

interface InputProps {
  data: Slide[];
  text: string;
  color: string;
  currentSlideIndex?: number;
  lastSlideIndex: number;
}

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: 10,
  width: "20%",
};

const RemotionPlayer: React.FC<{ inputProps: InputProps }> = ({
  inputProps,
}) => {
  const playerRef = useRef<PlayerRef>(null);

  return (
    <Player
      ref={playerRef}
      component={Presentation}
      compositionWidth={800}
      compositionHeight={450}
      controls
      durationInFrames={200 * 4}
      fps={60}
      inputProps={inputProps}
    />
  );
};
export const RemotionRoot: React.FC = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [currentSlideIndex, setCurrentSlideIndex] = useState<
    number | undefined
  >(0);
  const [lastSlideIndex, setLastSlideIndex] = useState<number>(-1);
  const [data, setData] = useState<Slide[]>(slidesData);

  const updateText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const changeColor = (newColor: string) => {
    setColor(newColor);
  };

  const handleApprove = () => {
    setLastSlideIndex(currentSlideIndex || 0);
    setCurrentSlideIndex(1);
  };

  const handleReject = () => {
    setLastSlideIndex(currentSlideIndex || 0);
    setCurrentSlideIndex(2);
  };

  useEffect(() => {
    if (currentSlideIndex === 1) {
      setData(approvalSlides);
    }
    if (currentSlideIndex === 2) {
      setData(rejectedSlides);
    }
  }, [currentSlideIndex]);

  return (
    <div style={styles}>
      <ButtonGroup handleApprove={handleApprove} handleReject={handleReject} />
      <TextInput updateText={updateText} />
      <ColorPicker changeColor={changeColor} />
      <RemotionPlayer
        inputProps={{
          data,
          text,
          color,
          currentSlideIndex,
          lastSlideIndex,
        }}
      />
    </div>
  );
};
