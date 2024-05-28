import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import AccountPage from './pages/AccountPage/AccountPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< SignUpPage />} />
      <Route path="/trainer" element={< HomePage />} />
      <Route path="/account" element={< AccountPage />} />
      <Route path="*" element={< NotFoundPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
