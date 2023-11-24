// import React, { useState, useEffect } from "react";

// const CoinList = ({ onBuyCoin }) => {
//   const [coins, setCoins] = useState([]);
//   const [selectedCoin, setSelectedCoin] = useState(null);

//   useEffect(() => {
//     fetch('https://crypto-app-14ma.onrender.com/coins')
//       .then(res => res.json())
//       .then((data) => setCoins(data))
//       .catch((error) => console.log('Error fetching data: ' + error));
//   }, []);

//   const handleCardClick = (coinId) => {
//     const selected = coins.find(coin => coin.id === coinId);
//     setSelectedCoin(selected);
//   }

//   const handleBuyClick = () => {
//     if (selectedCoin) {
//       // Pass the selected coin to the parent component (App) for handling
//       onBuyCoin(selectedCoin);
//       // Clear the selected coin state
//       setSelectedCoin(null);
//     }
//   }

//   return (
//     <div>
//       <h2>Top Crypto Coins</h2>
//       <div className="coin-list">
//         {coins.map((coin) => (
//           <div className="coin-card" key={coin.id} onClick={() => handleCardClick(coin.id)}>
//             <h3>{coin.name}</h3>
//             <img src={coin.image} alt={coin.name} />
//             <p>Price in USD: {coin.price}</p>
//             {selectedCoin && selectedCoin.id === coin.id && (
//               <div>
//                 <p>In circulation: {selectedCoin.circulatingSupply}</p>
//                 <p>Market Cap: {selectedCoin.marketCap}</p>
//                 <button className="buy" onClick={handleBuyClick}>Buy {selectedCoin.name}</button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CoinList;
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
      // Pass the selected coin to the parent component (HomePage) for handling
      onBuyCoin(selectedCoin);
      // Clear the selected coin state
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
