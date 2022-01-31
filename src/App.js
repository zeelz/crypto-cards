import { useState, useEffect } from 'react';
import './App.css';
import Coin from './components/Coin';

function App() {

  const [cryptoData, setCryptoData] = useState([]);
  const [filterInput, setData] = useState("");

  
  
  useEffect(() => {

    getCryptoData()

    
  }, []);

  const filteredCoins = cryptoData.filter(item => item.name.toLowerCase().includes(filterInput.toLowerCase()))

  const getCryptoData = async () => {

    const url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=100"

    const res = await fetch(url)
    const data = await res.json()

    setCryptoData(data.coins)

  }
  
  return (
    <div className="App">

    <header>
      <h1>Cryto<strong>Cards</strong></h1>
    </header>

      <div className="cryptoHeader">
        <input type="text" onChange={(e) => setData(e.target.value)} placeholder='Filter coins' />
      </div>

      <div className={`cryptoDisplay row1-container ${filteredCoins.length < 1? "no-match": ""}`}>
        { filteredCoins.length > 0 ?

            filteredCoins?.map(item => {
              return (<Coin name={item.name} icon={item.icon} symbol={item.symbol} price={item.price} key={item.name} websiteUrl={item.websiteUrl} />)
            })

            :
            <h1 style={{fontSize: "2rem"}}>No match found!</h1>
        }
        
      </div>

      <div className="footer">
        <a href="https://github.com/zeelz">&copy; <span>zeelz</span> </a>
      </div>
      
    </div>
  );
}

export default App;
