'use client'
import React, { useState, useEffect } from 'react';
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from 'next/dynamic'
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor'),
  { ssr: false }
)

const FrameByFrameViewer = ({ actionLog }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(3);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (actionLog.length > 0) {
      if (actionLog[currentIndex].type === 'change') {

      setContent(actionLog[currentIndex].value || '');
    }
  }
  }, [currentIndex, actionLog]);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < actionLog.length - 1) {
            return prevIndex + 1;
          } else {
            setIsPlaying(false);
            return prevIndex;
          }
        });
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, actionLog]);

  const handleSliderChange = (value) => {
    setCurrentIndex(value[0]);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStepForward = () => {
    if (currentIndex < actionLog.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleStepBackward = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Frame-by-Frame Action Viewer</h1>
      <div className="bg-white-100 p-4 mb-4 h-60 overflow-auto">
      <MDEditor
        value={content}
        onChange={() => {}}
        preview="live"
        height={500}
        fullScreen={true}
        previewOptions={{
          breaks: true
        }}
      />
      </div>
      <div className="flex items-center justify-between mb-4">
        <Button onClick={handleStepBackward}><SkipBack size={16} /></Button>
        <Button onClick={togglePlayPause}>
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </Button>
        <Button onClick={handleStepForward}><SkipForward size={16} /></Button>
      </div>
      <Slider
        max={actionLog.length - 1}
        step={1}
        value={[currentIndex]}
        onValueChange={handleSliderChange}
      />
      <div className="mt-4">
        <label className="block text-sm font-medium text-white-700">
          Playback Speed: {playbackSpeed}x
        </label>
        <Slider
          
          min={0.5}
          max={10}
          step={0.5}
          value={[playbackSpeed]}
          onValueChange={(value) => setPlaybackSpeed(value[0])}
          className="text-white"
        />
      </div>
      <div className="mt-4 bg-white-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">Current Frame Details</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2">
            <span className="font-medium">Index:</span> {currentIndex}
          </div>
          {actionLog[currentIndex]?.value && (
            <div className="col-span-2">
              <span className="font-medium">Value:</span> {actionLog[currentIndex].value}
            </div>
          )}
          {actionLog[currentIndex]?.key && (
            <div className="col-span-2">
              <span className="font-medium">Key:</span> {actionLog[currentIndex].key}
            </div>
          )}
          <div>
            <span className="font-medium">Action:</span> {actionLog[currentIndex]?.type}
          </div>
          <div>
            <span className="font-medium">Timestamp:</span> {actionLog[currentIndex]?.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameByFrameViewer;