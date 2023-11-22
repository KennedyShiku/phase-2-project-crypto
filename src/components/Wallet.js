import React from "react";

function CryptoWallet({name, amount, imagesrc}){

    return(
        <React.Fragment>
            <div>
                <img src={imagesrc} alt="Picture Unavailable" />
                <h1>{name}</h1>
                <h2>Amount: {amount}</h2>
            </div>
            <div className="post">
             <h3>latest Post</h3> 
             <p>Title: My Crypto Update</p>             
             <p>Posted on: {new Date().toLocaleString()}</p>
            </div>

        </React.Fragment>
    );
}


export default CryptoWallet;