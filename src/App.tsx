import TopBar from './components/TopBar/TopBar.tsx';
import MainContent from './components/MainContent/MainContent.tsx';

const App = () => {
  return (
    <div className="flex flex-col w-screen h-screen bg-gradient-to-b from-green-500 to-green-700">
      <TopBar />
      <MainContent />
    </div>
  );
};

export default App;
