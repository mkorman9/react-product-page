import {FaBlender} from 'react-icons/fa';
import HamburgerMenu from './HamburgerMenu.tsx';
import {Link} from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="flex w-screen h-16 justify-evenly text-gray-100 items-center m-0">
      <div className="flex max-lg:ml-4">
        <FaBlender size={38} color="white"/>
        <span className="ml-2 font-bold text-2xl">Blendify</span>
      </div>

      <nav className="flex gap-10 max-lg:hidden">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/help">Help</Link>
        <Link to="/careers">Careers</Link>
      </nav>
      <div className="flex ml-auto lg:hidden">
        <HamburgerMenu/>
      </div>
    </div>
  );
};

export default TopBar;
