import React, {useState, useEffect} from "react";

const CoinList = () => {
  const [coins, setCoins] = useState([]);


  useEffect(() => {
    fetch('https://crypto-app-14ma.onrender.com/coins')
    .then(res => res.json())
    .then((data) => setCoins(data))
    .catch((error) => console.log('Error fetching data: ' + error));
  }, []);

  return ( 
    <div>
      <h2>Top Crypto Coins</h2>
      <div className="coin-list">
        {coins.map((coin) => (
          <div className="coin-card" key={coin.id}>
            <h3>{coin.name}</h3><p>{coin.symbol}</p>
            <img src={coin.image} alt={coin.name} />
            <p>Price in USD: {coin.price}</p>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default CoinList;