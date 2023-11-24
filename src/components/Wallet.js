import React from 'react';

const Wallet = ({ selectedCoins = [] }) => {
  return (
    <React.Fragment>
      <h2>Wallet</h2>
      {selectedCoins && selectedCoins.length > 0 ? (
        <div className="wallet-coins">
          {selectedCoins.map((coin) => (
            <div className="wallet-coin" key={coin.id}>
              <h3>{coin.name}</h3>
              <img src={coin.image} alt={coin.name} />
              <p>Price in USD: {coin.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No coins in the wallet</p>
      )}
    </React.Fragment>
  );
}

export default Wallet;
