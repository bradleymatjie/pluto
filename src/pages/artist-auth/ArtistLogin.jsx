import { useState } from 'react';
import { Link } from 'react-router-dom';
import './artist-auth.scss';

export const ArtistLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section className="login">
      <div className="signUp-login">
        <h2>Don't have an Account?</h2>
        <Link to='/artist/signup'>
          <button>Sign Up</button>
        </Link>
      </div>

      <div className='login_container'>
        <form>
        <h1>Log in</h1>
          <input 
          type="text" 
          placeholder='username'
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
          required/>
          <input 
          type="password" 
          placeholder='password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          required/>
          <button type="submit">LOG IN</button>
        </form>
      </div>
    </section>
  );
}