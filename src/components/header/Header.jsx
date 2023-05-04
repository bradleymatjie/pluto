import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        Pluto
      </div>

        <nav>
          <ul>
            <Link to='/discover/home'>
              <li>Home</li>
            </Link>
            
            {/* <Link to='/contact'> */}
            {/* <li>Contact</li> */}
             {/* </Link> */}
            
            <Link to='/about'>
              <li>About</li>
            </Link>

            {false && <li className='profile'>Bradley</li>}
          </ul>
        </nav>
    </header>
  );
}