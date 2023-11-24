import React from 'react';
import '../App.css';

const Navbar = () => {
  
  return (
    <div>
      <div className="navigation">
        <a href='/'>Home</a>
        <a href='/wallet'>Wallet</a>
        <a href='/blog'>Blog</a>
        <a href='/signup'>Sign Up</a>
      </div>
      <div className='searchbar'>
        <input 
        type="text" 
        name="text" 
        placeholder="Search for a coin" 
        className="input-bar"
        />
      </div>
    </div>
  );
}

export default Navbar;
