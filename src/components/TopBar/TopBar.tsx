import {FaBlender} from 'react-icons/fa';
import HamburgerMenu from './HamburgerMenu.tsx';

const TopBar = () => {
  return (
    <div className="flex w-screen h-16 justify-evenly text-gray-100 items-center m-0">
      <div className="flex max-lg:ml-4">
        <FaBlender size={38} color="white"/>
        <span className="ml-2 font-bold text-2xl">Blendify</span>
      </div>

      <div className="flex gap-10 max-lg:hidden">
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">About Us</span>
        <span className="cursor-pointer">Help</span>
        <span className="cursor-pointer">Careers</span>
      </div>
      <div className="flex ml-auto lg:hidden">
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default TopBar;
