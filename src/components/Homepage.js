import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import CoinList from './CoinList';
import SignUp from './SignUp';
// import Wallet from './Wallet';


const HomePage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [walletCoins, setWalletCoins] = useState([]);

  const handleGetStartedClick = () => {
    setShowSignUp(true);
  };

  const handleBuyCoin = (selectedCoin) => {
    console.log('Selected coin: ', selectedCoin);
    setWalletCoins((prevCoins) => [...prevCoins, selectedCoin]);
    console.log('Wallet coins: ', walletCoins);
  };

  return (
    <div>
      <div className="intro">
        <div className="intro-title">
          <h1>Trade with us</h1>
          <h2>Buy and sell cryptocurrency</h2>
          <p>Fast and secure way to buy and<br/> exchange the top crypto coins</p>
          <div className="intro-buttons">
            <Link to="/signup">
              <button className="get-started" onClick={handleGetStartedClick}>Get Started</button>
            </Link>
            <button className="browse-coins">Browse Now</button>
          </div>
        </div>
        <div className="intro-image">
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029" alt='homepage'/>       
        </div>
      </div>
      {showSignUp && <SignUp />}
      <CoinList onBuyCoin={handleBuyCoin}/>
      {/* <Wallet selectedCoins={walletCoins}/> */}
    </div>
  );
}

export default HomePage;
