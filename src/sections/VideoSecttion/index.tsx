import { FC } from 'react';
import {
  VideoContainer,
  VideoContent,
  ControlText,
} from './VideoSection.styles';

const VideoSection: FC = () => {
  return (
    <>
      <VideoContainer>
        <VideoContent>
          <video controls autoPlay muted preload='auto'>
            <source
              src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
              type='video/mp4'
            />
            <ControlText>Your browser doesn't support HTML video.</ControlText>
          </video>
        </VideoContent>
      </VideoContainer>
    </>
  );
};

export default VideoSection;
