import { FC, useState } from 'react';
import 'video.js/dist/video-js.css';
// import Text from '../../ui-components/Text';
import { helpers } from './helpers';
// import AudioAnalyser from '../../components/AudioAnalyser';
import {
  VideoContainer,
  VideoContent,
  ControlText,
  AudioContent,
  Video,
  Audio,
} from './VideoSection.styles';

const VideoSection: FC = () => {
  const [audio, setAudio] = useState<MediaStream | undefined>();

  const getMicrophone = async () => {
    const audioValue = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false,
    });
    setAudio(audioValue);
  };

  const stopMicrophone = () => {
    audio?.getTracks().forEach((track) => track.stop());
    setAudio(undefined);
  };

  const toggleMicrophone = () => {
    if (audio) {
      stopMicrophone();
    } else {
      getMicrophone();
    }
  };

  console.log(audio, 'moje audtio');

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
        {/* <AudioContent> */}
        {/* <Text
            content='Listen new podcast about photography'
            option='subtitle'
          />
          <Audio controls>
            <source src={helpers.mp3Link} type='audio/mp3' />
            <ControlText>Your browser doesn't support HTML5 audio.</ControlText>
          </Audio> */}
        {/* <button onClick={() => toggleMicrophone()}>
            {audio ? 'Stop microphone' : 'Get microphone input'}
          </button>
          {audio ? <AudioAnalyser audio={audio} /> : ''} */}
        {/* </AudioContent> */}
      </VideoContainer>
    </>
  );
};

export default VideoSection;
