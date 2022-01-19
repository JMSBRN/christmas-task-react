import React, { useState, useEffect, useContext } from 'react'
import url from '../assets/audio/audio.mp3'
import IsonSoundImg from '../assets/icons/audio.png'
import IsonSnowImg from '../assets/icons/snow.png'
import { ContextFilters } from '../ContextFilters'

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};


const ShowAndAudio = () => {
  const {toggleActiveCSnowFlakes} = useContext(ContextFilters);
  const [playing, toggle] = useAudio(url);
  


  function toggleActiveClass(e) {
    e.target.classList.toggle("active");
  }

  return (
    <div>
      <div className="snow-audio-container menu-container">
        <button className="audio-control menu-item" onClick={toggle}>
          {playing ? "Pause" : "Play"}
          <img className='sound-img' onClick={toggleActiveClass} src={IsonSoundImg} width={50} alt='sound-img'></img>
        </button>
        <button onClick={toggleActiveCSnowFlakes} className="snow-control menu-item">
          <img  className='show-img' src={IsonSnowImg} width={50} alt='snow-img'></img>
        </button>
      </div>
    </div>
  );
}
export default ShowAndAudio
