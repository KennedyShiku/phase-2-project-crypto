import React from 'react';
import '../App.css';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="logo">
        
      </div>
      <div className="navigation">
        <a href='/'>Home</a>
        <a href='/'>Wallet</a>
        <a href='/'>Blog</a>
        <a href='/'>Sign Up</a>
      </div>
      <div className='searchbar'>
        <input type="text" name="text" placeholder="Search for a coin" className="input"></input>
      </div>
    </div>
  );
}

export default Navbar;
