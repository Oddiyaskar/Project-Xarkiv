import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import OnePage from './Components/1page/1page';
import TwoPage from './Components/2page/2page';
import ThreePage from './Components/3page/3page';
import Kontakt from './Components/Kontakt/Kontakt';
import FourPage from './Components/4page/4page';
import FivePage from './Components/5page/5page';
import SixPage from './Components/6page/6page';
import SevenPage from './Components/7page/7page';
import EightPage from './Components/8page/8page';
import NinePage from './Components/9page/9page';
import TenPage from './Components/10page/10page';
import ElevenPage from './Components/11page/11page';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Routes>
        <Route path='' element={<OnePage />} />
        <Route path='TwoPage' element={<TwoPage />} />
        <Route path='ThreePage' element={<ThreePage />} />
        <Route path='Kontakt' element={<Kontakt />} />
        <Route path='FourPage' element={<FourPage />} />
        <Route path='FivePage' element={<FivePage />} />
        <Route path='SixPage' element={<SixPage />} />
        <Route path='SevenPage' element={<SevenPage />} />
        <Route path='EightPage' element={<EightPage />} />
        <Route path='NinePage' element={<NinePage />} />
        <Route path='TenPage' element={<TenPage />} />
        <Route path='ElevenPage' element={<ElevenPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;