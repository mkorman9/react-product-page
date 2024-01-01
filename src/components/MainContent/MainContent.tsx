import splashImg from './splash.png';

const MainContent = () => {
  return (
    <div className="flex h-[75vh] items-center justify-center text-gray-300 mt-10">
      <div className="flex gap-[10vw] m-2">
        <div className="flex flex-col text-left justify-center gap-4">
          <span className="text-6xl font-bold">You send it, we blend it!</span>
          <span className="text-xl">The first Blending as a service startup in the world</span>
          <span className="flex w-32 h-12 rounded-3xl text-black bg-gray-300 items-center justify-center cursor-pointer">
            Order Now
          </span>
        </div>
        <img src={splashImg} alt='' className="h-[55vh] rounded-xl shadow-xl max-lg:hidden" />
      </div>
    </div>
  );
};

export default MainContent;
