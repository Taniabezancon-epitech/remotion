import { Player, PlayerRef } from "@remotion/player";
import { Presentation, PresentationProps } from "./Presentation";
import { ButtonGroup } from "./Player/ButtonGroup";
import { ColorPicker } from "./Player/ColorPicker";
import { TextInput } from "./Player/TextInput";
import React, { CSSProperties, useCallback, useRef, useState } from "react";
import { activities } from "../Shared/data";

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 20,
  padding: 10,
  width: "20%",
};

export const PresentationPlayer: React.FC = () => {
  const playerRef = useRef<PlayerRef>(null);

  const durationBySlide = 200; //ms
  const durationInFrames = activities.length * durationBySlide;

  const [currentActivities, setCurrentActivities] = useState(activities);
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [isApprovalMode, setIsApprovalMode] = useState(false);

  const handleTextUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleColorUpdate = (newColor: string) => {
    setColor(newColor);
  };

  const handleApprove = () => {
    console.log("handleApprove");
    setCurrentActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== 3)
    );
    playerRef.current?.play();
    setIsApprovalMode(false);
  };

  const handleReject = () => {
    console.log("handleReject");
    setCurrentActivities((prevActivities) =>
      prevActivities.filter((activity) => activity.id !== 2)
    );
    playerRef.current?.play();
    setIsApprovalMode(false);
  };

  const handleOnActivityChange = useCallback((index: number) => {
    if (activities[index].isApproval) {
      playerRef?.current?.pause();
      setIsApprovalMode(true);
    }
  }, []);

  const inputProps: PresentationProps = {
    activities: currentActivities,
    text,
    color,
    playerRef,
    onActivityChange: handleOnActivityChange,
  };

  return (
    <div style={styles}>
      {isApprovalMode ? (
        <>
          <ButtonGroup
            handleApprove={handleApprove}
            handleReject={handleReject}
          />
          <TextInput updateText={handleTextUpdate} />
          <ColorPicker changeColor={handleColorUpdate} />
        </>
      ) : (
        <div style={{ color: "white" }}>Nothing to decide</div>
      )}
      <Player
        ref={playerRef}
        component={Presentation}
        compositionWidth={800}
        compositionHeight={450}
        controls
        durationInFrames={durationInFrames}
        fps={60}
        inputProps={inputProps}
      />
    </div>
  );
};
