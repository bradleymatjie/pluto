import { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './artist-auth.scss';

export const ArtistSignup = memo(() => {
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const artistAuth = (e) => {
    e.preventDefault();
    navigate('/artist/home');
  }
  return (
    <section className="signup">
      <div className='signup_container'>
        <form onSubmit={artistAuth}>
        <h1>Sign up</h1>
          <input
            type="text"
            placeholder='Display Name'
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
            value={displayName}
            required/>
          <input
            type="text"
            placeholder='username'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            required/>
          <input
            type="email"
            placeholder='Email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required/>
          <input
            type="password"
            placeholder='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required/>
          <button type="submit">REGISTER</button>
        </form>
      </div>

      <div className="signUp-login">
        <h2>Already have an account?</h2>
        <Link to='/artist/login'>
          <button>LOG IN</button>
        </Link>
      </div>
    </section>
  );
})