import { Fragment, RefObject, useEffect } from "react";
import { AbsoluteFill, Img, Sequence } from "remotion";
import { Activity } from "../Shared/data";
import { Title } from "./Title";
import { PlayerRef } from "@remotion/player";

export type PresentationProps = {
  activities: Activity[];
  text: string;
  color: string;
  playerRef?: RefObject<PlayerRef>;
  onActivityChange: (index: number) => void;
};

export const durationInFrames = 200;

export const Presentation: React.FC<PresentationProps> = ({
  activities,
  color,
  playerRef,
  onActivityChange,
}) => {
  const currentFrame = playerRef?.current?.getCurrentFrame() ?? 0;
  const currentActivityIndex = Math.floor(
    currentFrame / (durationInFrames * 2 - 10) // Wait for the end of the current activity animation
  );

  console.log({ currentActivityIndex });

  useEffect(() => {
    onActivityChange(currentActivityIndex);
  }, [currentActivityIndex]);

  return (
    <AbsoluteFill style={{ background: "#F8F8F8" }}>
      <>
        {activities.map((activity: Activity, index: number) => (
          <Sequence
            key={activity.id}
            from={index * durationInFrames}
            durationInFrames={durationInFrames}
            //@ts-expect-error TS is yelling here, remotion bug?
            fadeOut
          >
            <>
              <Title titleText={activity.title} titleColor={color} />
              <div
                style={{
                  textAlign: "center",
                  marginTop: "150px",
                  marginLeft: 360,
                }}
              >
                <Img src={activity.avatar} style={{ width: 68 }} />
              </div>
              <div>
                <h2 style={{ marginTop: "300px", marginRight: 200}}>{activity.description}</h2>
              </div>
            </>
          </Sequence>
        ))}
      </>
    </AbsoluteFill>
  );
};
