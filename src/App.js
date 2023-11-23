import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import CryptoWallet from './components/Wallet';
import Blog from './components/Blog';
import SignUp from './components/SignUp';
import Navbar from './components/NavBar';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/wallet" element={<CryptoWallet/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="*" element={<ErrorPage/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
