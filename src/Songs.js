import intsizwa from './media/intsizwa.mp3'; 
import padlock from './media/padlock.m4a';
import fallslowly from './media/fallslowly.mp3';
import the_preamble from './media/The-Preamble.mp3';
import south from './media/95_south.mp3';
import nomayin from './media/nomayini.m4a';
import kingK from './media/kingkunta.mp3';
import adoreyou from './media/adoreyou.mp3';

import songCover1 from './media/cover.jpg';
import songCover2 from './media/cover2.jpg';
import songCover3 from './media/cover3.jpg';
import songCover4 from './media/cover4.jpg';
import songCover5 from './media/cover5.jpg';
import songCover6 from './media/cover6.jpg';
import songCover8 from './media/cover8.jpg';
import saint from './media/saint.JPG';

export const songs = [
  {
    id: 1,
    title: 'PAD LOCK',
    artist: '21 SAVAGE',
    cover: `${songCover1}`,
    songUrl: `${padlock}`,
    album: 'I AM < I WAS',
    date_released: 2018
  },
  {
    id: 2,
    title: 'intsizwa',
    artist: 'black12',
    cover: `${songCover2}`,
    songUrl: `${intsizwa}`,
    album: 'ClONE',
    date_released: 2019
  },
  {
    id: 3,
    title: 'THE-PREAMBLE',
    artist: 'A-REECE',
    cover: `${songCover3}`,
    songUrl: `${the_preamble}`,
    album: 'REECE EFFECT',
    date_released: 2019
  },
  {
    id: 4,
    title: '95 SOUTH',
    artist: 'J COLE',
    cover: `${songCover4}`,
    songUrl: `${south}`,
    album: 'THE FALL OF SEASON',
    date_released: 2021
  },
  {
    id: 5,
    title: 'FALL SLOWLY',
    artist: 'JOYNER LUCAS',
    cover: `${songCover5}`,
    songUrl: `${fallslowly}`,
    album: 'EVOLUTION',
    date_released: 2022
  },
  {
    id: 6,
    title: 'NOMAYIN',
    artist: 'KWESTA',
    cover: `${songCover6}`,
    songUrl: `${nomayin}`,
    album: 'DAKAR II',
    date_released: 2015
  },
  {
    id: 8,
    title: 'KING KUNTA',
    artist: 'KENDRICK LAMAR',
    cover: `${songCover8}`,
    songUrl: `${kingK}`,
    album: 'TO PIMP A BUTTERFLY',
    date_released: 2016
  },
  {
    id: 9,
    title: 'ADORE YOU',
    artist: 'Saint',
    cover: `${saint}`,
    songUrl: `${adoreyou}`,
    album: 'TEARS OF A BROKEN HEART',
    date_released: 2023
  }
]