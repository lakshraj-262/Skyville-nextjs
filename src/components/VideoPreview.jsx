"use client";

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Play } from 'lucide-react';

const VideoPreview = ({ videoUrl, className }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="relative inline-flex items-center gap-2 cursor-pointer group text-white font-medium"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setShowModal(true)}
      >
        <div className="bg-white/10 rounded-full p-2">
          <Play className="w-4 h-4" />
        </div>
        Watch the video
        
        {/* Preview on hover */}
        {isHovering && (
          <div className=" z-50 absolute top-full left-0 mt-2 w-64 aspect-video rounded-lg overflow-hidden shadow-xl">
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              playing={true}
              muted={true}
              controls={false}
            />
          </div>
        )}
      </div>

      {/* Full video modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div className="w-full max-w-4xl aspect-video">
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              playing={true}
              controls={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPreview;
