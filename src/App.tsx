import TopBar from './components/TopBar/TopBar.tsx';
import MainPage from './components/MainPage/MainPage.tsx';
import {Route, Routes} from 'react-router-dom';
import AboutPage from './components/AboutPage/AboutPage.tsx';
import HelpPage from './components/HelpPage/HelpPage.tsx';
import CareersPage from './components/CareersPage/CareersPage.tsx';

const App = () => {
  return (
    <div className="flex flex-col">
      <TopBar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </div>
  );
};

export default App;
