import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.scss';

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const userAuth = async (e) => {
    e.preventDefault();
    navigate('/discover/home');
  }
  
  return (
    <AnimatePresence>
      <motion.section 
        initial={{ opacity: 0, y: 1000}} 
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 1000}} 
        className="signup">
      <div className='signup_container'>
        <form onSubmit={userAuth} action='localhost:5000/user/register' method='POST'>
        <h1>Sign up</h1>
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
            type="email"
            placeholder='Email'
            name='email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
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
          <button type="submit">REGISTER</button>
        </form>
      </div>

      <div className="signUp-login">
        <h2>Already have an account?</h2>
        <Link to='/discover/Login'>
          <button>LOG IN</button>
        </Link>
      </div>
    </motion.section>
  </AnimatePresence>
  );
}