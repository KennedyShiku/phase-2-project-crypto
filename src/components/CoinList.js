import React, { useState, useEffect } from "react";

const CoinList = ({ onBuyCoin }) => {
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    fetch('https://crypto-app-14ma.onrender.com/coins')
      .then(res => res.json())
      .then((data) => setCoins(data))
      .catch((error) => console.log('Error fetching data: ' + error));
  }, []);

  const handleCardClick = (coinId) => {
    const selected = coins.find(coin => coin.id === coinId);
    setSelectedCoin(selected);
  }

  const handleBuyClick = () => {
    if (selectedCoin) {
      fetch('hhttps://crypto-app-14ma.onrender.com/wallet/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedCoin),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Coin added to wallet:', data);
        })
        .catch(error => console.error('Error adding coin to wallet:', error));
      onBuyCoin(selectedCoin);

      setSelectedCoin(null);
    }
  }

  return (
    <div>
      <h2>Top Crypto Coins</h2>
      <div className="coin-list">
        {coins.map((coin) => (
          <div className="coin-card" key={coin.id} onClick={() => handleCardClick(coin.id)}>
            <h3>{coin.name}</h3>
            <img src={coin.image} alt={coin.name} />
            <p>Price in USD: {coin.price}</p>
            {selectedCoin && selectedCoin.id === coin.id && (
              <div>
                <p>In circulation: {selectedCoin.circulatingSupply}</p>
                <p>Market Cap: {selectedCoin.marketCap}</p>
                <button className="buy" onClick={handleBuyClick}>Buy {selectedCoin.name}</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoinList;
