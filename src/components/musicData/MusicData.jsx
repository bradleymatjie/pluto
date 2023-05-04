import './MusicData.scss';
// import axios from 'axios';
import { songs } from '../../Songs';

export const MusicData = ({ currentSong }) => {
  
  const sorted = songs.sort((a, b) => {
    return b.date_released - a.date_released;
  })

  return (
    <div className='music_list'>
      {sorted.map(song => (
        <div
          className='song_card' 
          key={song.id}
        >
        <img src={song.cover} alt='song cover' />
        <div className='song_play'>
          <h3>{song.title}</h3>
          <button onClick={() => {
            currentSong(song);
          }}>
          PLAY
          </button>
        </div>
        <p className='artist_name'>{song.artist}</p>
        <div className='album_info'>
        <p className='album_name'>{song.album}</p>
          <p className='release_date'>{song.date_released}</p>
        </div>
      </div>
      ))}
    </div>
  )};