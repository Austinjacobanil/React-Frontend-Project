import  { useRef } from 'react';
import PropTypes from 'prop-types';
import './VideoPlayer.css';
import video from '../../assets/basicsvdo.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const videoEl = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      videoEl.current?.pause();
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
    >
      <video
        ref={videoEl}
        src={video}
        autoPlay
        muted
        controls
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  playState: PropTypes.bool.isRequired,
  setPlayState: PropTypes.func.isRequired,
};

export default VideoPlayer;
