import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage';
import Blog from './components/Blog';
import SignUp from './components/SignUp';
import Navbar from './components/NavBar';
import ErrorPage from './components/ErrorPage';
import Wallet from './components/Wallet';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/wallet" element={<Wallet/>}/>
          <Route path="/blog" element={<Blog/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="*" element={<ErrorPage/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
