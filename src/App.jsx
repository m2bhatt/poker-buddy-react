import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import AccountPage from './pages/AccountPage/AccountPage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< HomePage />} />
      <Route path="/account" element={< AccountPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
