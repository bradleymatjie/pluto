import './App.scss';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer } from './components/footer/Footer';
import { Welcome } from './pages/welcome/Welcome.jsx';
import { Contact } from './pages/contact/Contact';
import { About } from './pages/about/About';
import { Header } from './components/header/Header';
import { ArtistSignup } from './pages/artist-auth/ArtistSignup';
import { ArtistLogin } from './pages/artist-auth/ArtistLogin';
import { Signup } from './pages/Auth/Signup.jsx';
import { Login } from './pages/Auth/Login.jsx';
import { Home } from './pages/Home/Home.jsx';
import { ArtistPage } from './pages/artist/ArtistPage';

function App() {
  const [playing, setPlaying] = useState({});
  const [showPlayer, setShowPlayer] = useState(false);

  const currentSong = (song) => {
    setPlaying(song);
    setShowPlayer(true);
  }

  const closePlayer = () => {
    setShowPlayer(false);
  }

    return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          {/* navbar navigation */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

          <Route path='/' element={<Welcome />} />
          
          {/* artist router */}
          <Route path='/artist/signup' element={ <ArtistSignup /> } />
          <Route path='/artist/login' element={ <ArtistLogin /> } />
          <Route path='/artist/home' element={ <ArtistPage currentSong={currentSong} />} />
          
          {/* discover router */}
          <Route path='/discover/signup' element={ <Signup /> } />
          <Route path='/discover/Login' element={ <Login /> } />
          <Route path='/discover/home' element={ <Home currentSong={currentSong} /> } />  
        </Routes>
        {showPlayer ? <Footer playing={playing} closePlayer={closePlayer} /> : ''}
      </BrowserRouter>
    </>
  );
}

export default App;
