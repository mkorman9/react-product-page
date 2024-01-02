import TopBar from './components/TopBar/TopBar.tsx';
import MainContent from './components/MainContent/MainContent.tsx';
import Features from './components/Features/Features.tsx';

const App = () => {
  return (
    <div className="flex flex-col">
      <TopBar />
      <MainContent />
      <Features />
    </div>
  );
};

export default App;
