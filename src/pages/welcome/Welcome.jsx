import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './Welcome.scss';

export const Welcome = memo(() => {
  return (
    <AnimatePresence>
      <motion.section 
        initial={{ opacity: 0, y: -1000}} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -1000}} 
        transition={{ delay: 1}} 
        className='welcome'>
        <div>
          <div className='welcome_item artists'>
            <h1>Are you an Artist?</h1>
            <p>Get your music listened to and downloaded by your fans and supporters</p>
            <Link to='/artist/signup'>  
              <button>FOR ARTISTS</button>
            </Link>
          </div>
          <div className='welcome_item discover'>
            <h1>Need something to listen to?</h1>
            <p>listen to and download your favourite music</p>
            <Link to='/discover/signup'>
              <button>DISCOVER MUSIC</button>
            </Link>
          </div>
        </div>

        <div className='welcome_right'>
          <h2>Welcome</h2>
          <p>Pluto is a music streaming and downloading web service</p>
        </div>
      </motion.section>
    </AnimatePresence>
  );
})