import { FC } from 'react';
import 'video.js/dist/video-js.css';
import Text from '../../ui-components/Text';
import { helpers } from './helpers';
import {
  VideoContainer,
  VideoContent,
  ControlText,
  AudioContent,
  Video,
  Audio,
} from './VideoSection.styles';

const VideoSection: FC = () => {
  return (
    <>
      <VideoContainer>
        <VideoContent>
          <Video
            className='video-js'
            controls
            autoPlay
            muted
            preload='auto'
            loop
          >
            <source src={helpers.mp4Link} type='video/mp4' />
            <ControlText>Your browser doesn't support HTML video.</ControlText>
          </Video>
        </VideoContent>
        <AudioContent>
          <Text
            content='Listen new podcast about photography'
            option='subtitle'
          />
          <Audio controls>
            <source src={helpers.mp3Link} type='audio/mp3' />
            <ControlText>Your browser doesn't support HTML5 audio.</ControlText>
          </Audio>
        </AudioContent>
      </VideoContainer>
    </>
  );
};

export default VideoSection;
