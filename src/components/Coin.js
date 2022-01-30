import React from 'react';
import './coins.css';

function Coin({name, icon, symbol, price, websiteUrl}) {
    return (

    <div className="box box-down cyan">
        <a href={websiteUrl}><h2>{name}</h2></a>
      
      <div style={{
          "display": "flex",
          "justifyContent": "center"
      }}>
        <span>$</span>
        <h1 style={{margin: 0}}>{`${String(price).substr(0, 8)}`}</h1>
      </div>
      
      <h2>{symbol}</h2>
      <div style={{height: "50px"}}>
          <img src={icon} alt="" style={{height: "100%"}} />
      </div>
      
    </div>

    
    );
}

export default Coin;
