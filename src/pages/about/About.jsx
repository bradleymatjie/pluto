import { memo } from 'react';
import './About.scss';

import saint from '../../media/saint.JPG';

export const About = memo(() => {
  return (
    <section className='about'>
      <article>
        <h1>ABOUT US</h1>
        <p>
          "Here's to the undergrounds, the outcasts, the misfits
          and those who keep trying even when its clear that they should give up,
          This platform is for them.<br/>
          Because you want listeners, people who can appreciate your art
          and hopefully touch them deep enough for them to want to share it with their friends and loved ones.
          This website has been made alot easier to upload, play and share your music instantly.
          Because you are still growing as an artist we've included the ability to play
          and download songs with just a click.<br/>
          Right now you can only upload one  song at a time but as time goes on you'll be able to upload ulbums, mixtapes and Eps,
          I am the sole developer on this project, your patience is appreciated. thank you"
        </p>
        <h2>Bradley Matjie</h2>
        <span>Founder, CEO, developer</span>
      </article>

      <div>
        <img src={saint} alt="about us cover" />        
      </div>
    </section>
  );
})