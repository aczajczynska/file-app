import { FC } from "react";
import "video.js/dist/video-js.css";
import { helpers } from "./helpers";
import {
  VideoContainer,
  VideoContent,
  ControlText,
  Video,
} from "./VideoSection.styles";

const VideoSection: FC = () => {
  return (
    <>
      <VideoContainer>
        <VideoContent>
          <Video
            className="video-js"
            controls
            autoPlay
            muted
            preload="auto"
            loop
          >
            <source src={helpers.mp4Link} type="video/mp4" />
            <ControlText>Your browser doesn't support HTML video.</ControlText>
          </Video>
        </VideoContent>
      </VideoContainer>
    </>
  );
};

export default VideoSection;
