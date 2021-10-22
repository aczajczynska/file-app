import React, { useEffect, useState } from 'react';
import AudioVisualiser from '../AudioVisualiser';

const AudioAnalyser = async (audio: MediaStream) => {
  const [audioData, setAudioData] = useState({ audioData: new Uint8Array(0) });

  // const { audio } = props;
  let analyser: any;
  let dataArray: Uint8Array;
  let rafId: number;
  let source: MediaStreamAudioSourceNode;

  useEffect(() => {
    const AudioContext = window.AudioContext;
    const audioCtx = new AudioContext();
    analyser = audioCtx.createAnalyser();
    dataArray = new Uint8Array(analyser.frequencyBinCount);
    source = audioCtx.createMediaStreamSource(audio);
    source.connect(analyser);
  }, []);

  const tick = () => {
    analyser.getByteTimeDomainData(dataArray);
    setAudioData({ audioData: dataArray });
    rafId = requestAnimationFrame(tick);
  };

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafId);
      analyser.disconnect();
      source.disconnect();
    };
  }, [analyser]);

  return <>{/* <AudioVisualiser audioData={audioData} />; */}</>;
};

export default AudioAnalyser;
