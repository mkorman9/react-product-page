import splashImg from './splash.jpg';

const MainContent = () => {
  return (
    <div className="flex w-screen h-[80vh] items-center justify-center text-gray-300 mt-10
                    bg-gradient-to-b from-green-500 to-green-700">
      <div className="flex gap-[10vw] m-2">
        <div className="flex flex-col text-left justify-center gap-3">
          <span className="text-6xl font-bold">You send it, we blend it!</span>
          <span className="text-xl">The first Blending as a service startup in the world</span>
          <span className="flex w-32 h-12
                           items-center justify-center cursor-pointer rounded-3xl
                           text-black bg-gray-300">
            Order Now
          </span>
        </div>
        <img src={splashImg} alt='' className="h-[55vh] rounded-xl shadow-xl max-lg:hidden" />
      </div>
    </div>
  );
};

export default MainContent;
