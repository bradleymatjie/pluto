import  './Footer.scss';
import { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Footer = memo(({ playing, closePlayer }) => {
  return (
    <footer>
      <AnimatePresence>
      <motion.div initial={{y: 100}} animate={{ y: 0}} exit={{ y: 100}}>
        <img src={playing.cover} alt='song cover' />
        <div className='song_info-container'>
          <div className='song_info'>
            <h3>{playing.title}</h3>
            <p>{playing.artist}</p>
          </div>
        </div>
        <div className='button_controls'>
          <audio className='audio_controls' src={playing.songUrl} controls autoPlay></audio>
        </div>
        <div
          className='close'
          onClick={() => {
            closePlayer();
          }}
        >
          CLOSE
        </div>
      </motion.div>
      </AnimatePresence>
    </footer>
  );
})