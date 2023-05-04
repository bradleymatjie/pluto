import { memo, useState } from 'react';
import './ArtistPage.scss';
import { songs } from '../../Songs';

import pp from '../../media/bj.png';
import { MusicData } from '../../components/musicData/MusicData';

export const ArtistPage = memo(({ currentSong }) => {
  const [title, setTile] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [featuring, setFeaturing] = useState('');
  const [yearReleased, setYearReleased] = useState('');
  const [cover, setCover] = useState('');
  const [audio, setAudio] = useState('');

  const display = (e) => {
    e.preventDefault();
    const song = {
      id: 10,
      title: `${title}`,
      artist: 'Saint',
      cover: `${cover}`,
      songUrl: `${audio}`,
      album: `${albumName}`,
      date_released: `${yearReleased}`
    }

    songs.push(song);
  }
  
  
  return (
    <section className='artistPage'>
      <div className='profile'>
        <div className="profile_info">
          <div className='profile_info-img'>
          <img src={pp} alt='profile pic' />
          <button>CHANGE</button>
          </div>

          <div className='profile_info-title'>
            <h3>Bradley Matjie</h3>
            <p>@Saint</p>
          </div>
        </div>

        <article className='addsong_container'>
          <h4>Add Song</h4>
          <form onSubmit={display}>
            <div>
              <label className='upload_label song' htmlFor='songUpload'>
                Upload Audio 
                <input
                  type='file'
                  id='songUpload'
                  className='upload'
                  onChange={(e) => {
                    setAudio(e.target.value);
                  }}  
                required/>
              </label>
              <label className='upload_label cover' htmlFor='coverUpload'>
                Song Cover
                <input
                  type='file'
                  id='coverUpload'
                  className='upload'
                  onChange={(e) => {
                    setCover(e.target.value);
                  }}  
                required/>
              </label>
            </div>
            <input
              type="text"
              placeholder='Title'
             onChange={(e) => {
                    setTile(e.target.value);
                  }}
             required/>
            <input
              type="text"
              placeholder='Album name'
              onChange={(e) => {
                    setAlbumName(e.target.value);
                  }}
              required/>
            <input
              type="text"
              placeholder='Featuring?'
              onChange={(e) => {
                    setFeaturing(e.target.value);
                  }}
              />
            <input
              type="text"
              placeholder='year released'
              onChange={(e) => {
                    setYearReleased(e.target.value);
                  }}
              required/>
            <button type="submit">ADD</button>
          </form>
        </article>
      </div>

      <div className='category_container'>
        <div className='category_container-top'>
          <h2>All Songs: 8</h2>
          <select name="music_type" id="music_type">
            <option value="allSongs">All Songs</option>
          </select>
        </div>

        <div className='songs_container'>
          <MusicData currentSong={currentSong} />
        </div>
      </div>
    </section>
  );
})