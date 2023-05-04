import { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.scss';

export const Login = memo(() => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const userAuth = (e) => {
    e.preventDefault();
    navigate('/discover/home');
  }

  return (
    <section className="login">
      <div className="signUp-login">
        <h2>Don't have an Account?</h2>
        <Link to='/discover/signup'>
          <button>Sign Up</button>
        </Link>
      </div>

      <div className='login_container'>
        <form action='user/login' method='POST' onSubmit={userAuth}>
        <h1>Log in</h1>
          <input
            type="text"
            placeholder='username'
            name='username'
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            required/>
          <input
            type="password"
            placeholder='password'
            name='password'
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
})