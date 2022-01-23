import { Route, Routes } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

import HomePage from './pages/HomePage';
import ChristchurchPage from './pages/ChristchurchPage';
import Favorites from './pages/Favorites';
import Layout from './components/layout/Layout';
import RegisterPage from './pages/RegisterPage';
import NewListing from './pages/NewListing';
import LoginPage from './pages/LoginPage';
import { firebaseConfig } from './config/firebase';
import WellingtonPage from './pages/WellingtonPage';
import AucklandPage from './pages/AucklandPage';

function App() {
  initializeApp(firebaseConfig);
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/christchurch' element={<ChristchurchPage />} />
        <Route path='/auckland' element={<AucklandPage />} />
        <Route path='/wellington' element={<WellingtonPage />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/new-listing' element={<NewListing />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
