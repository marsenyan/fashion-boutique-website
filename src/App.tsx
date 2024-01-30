import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './layout/HomeLayout';
import { Catalogue } from './pages/catalogue/Catalogue';
import { Fashion } from './pages/fashion/Fashion';
import { Favourite } from './pages/favourite/Favourite';
import { Lifestyle } from './pages/lifestyle/LifeStyle';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/catalogue" element={<Catalogue/>} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/favourite" element={<Favourite/>} />
        <Route path="/lifestyle" element={<Lifestyle/>} />
      </Routes>
    </Router>
  );
};

export default App;
