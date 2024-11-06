import React from "react";
import PropTypes from "prop-types";

const VideoEmbed = ({ embedId, onClose }) => (
  <div className="video-modal">
    <div className="video-modal-content">
      <span className="video-close" onClick={onClose}>&times;</span>
      <div className="video-responsive">
      <iframe className='video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${embedId}?autoplay=0`}>
      </iframe>
      </div>
    </div>
  </div>
);

VideoEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default VideoEmbed;
