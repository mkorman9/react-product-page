import {useState} from 'react';
import {Transition} from '@headlessui/react';

const HamburgerMenu = () => {
  const [navigationExpanded, setNavigationExpanded] = useState(false);

  return (
    <>
      <div className="space-y-2 cursor-pointer mr-6" onClick={() => setNavigationExpanded(!navigationExpanded)}>
        <div className="w-8 h-0.5 bg-gray-100"></div>
        <div className="w-8 h-0.5 bg-gray-100"></div>
        <div className="w-8 h-0.5 bg-gray-100"></div>
      </div>

      <Transition
        show={navigationExpanded}
        enter="ease-linear duration-100"
        enterFrom="scale-0"
        enterTo="scale-100"
        leave="ease-linear duration-100"
        leaveFrom="scale-100"
        leaveTo="scale-0"
      >
        <div className="absolute right-0 top-14 flex flex-col gap-6 w-screen p-4
                        bg-white rounded-xl shadow-xl
                        text-black text-xl text-center">
          <span className="cursor-pointer">Home</span>
          <span className="cursor-pointer">About Us</span>
          <span className="cursor-pointer">Help</span>
          <span className="cursor-pointer">Careers</span>
        </div>
      </Transition>
    </>
  );
};

export default HamburgerMenu;