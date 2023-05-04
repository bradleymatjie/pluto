import './Home.scss';
import { memo } from 'react';
import { MusicData } from '../../components/musicData/MusicData';
export const Home = memo(({ currentSong }) => {

  return (
    <section className='home'>
      <ul className='menu_nav'>
        <li className='new_tab'>NEW</li>
        <li className='for_me'>FOR ME</li>
        <li className='collection_tab'>DISCOVER</li>
      </ul>

      <div className='music-container'>
        <MusicData currentSong={currentSong} />
      </div>
    </section>
  );
})