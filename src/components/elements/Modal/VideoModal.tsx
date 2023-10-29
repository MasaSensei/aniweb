import React, { useState } from "react";

const VideoModal = ({
  videoUrl,
  onClose,
}: {
  videoUrl: string;
  onClose: () => void;
}) => {
  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          allowFullScreen
          title="YouTube Video"
          className="container mx-auto top-0"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
