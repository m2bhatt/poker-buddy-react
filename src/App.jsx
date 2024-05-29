import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import AccountPage from './pages/AccountPage/AccountPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from "./pages/LoginPage/LoginPage";
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={< SignUpPage />} />
      <Route path="/login" element={< LoginPage setToken={setToken}/>} />
      <Route path="/trainer" element={< HomePage />} />
      <Route path="/account" element={< AccountPage />} />
      <Route path="*" element={< NotFoundPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
