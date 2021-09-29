import React from 'react';

function App(){
  return  (
    
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">Eshop</a>
            </div>
            <div>
                <a href= "cart.html">Cart</a>
                <a href = "signin.html" > Signin</a>
            </div>
        </header>
        <main>
            <div className="row center">
                <div className="cards">
                    <a href="product.html">
                        <img className="medium" src="./images/istockphoto-1005339436-612x612.jpg" alt="potato"/>
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Potato</h2>
                        </a>
                        <div className="price">
                            Rs 30
                        </div>
                    </div>

                </div>
            
            
                <div className="cards">
                    <a href="product.html">
                        <img className="medium" src="./images/istockphoto-173242750-612x612.jpg" alt="potato"/>
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Banana</h2>
                        </a>
                        <div className="price">
                            Rs 50
                        </div>
                    </div>

                </div>
                <div className="cards">
                    <a href="product.html">
                        <img className="medium" src="./images/Organic-Drumstick_large_4080ea56-52a3-4647-9d3d-98c2d72afed2.jpg" alt="potato"/>
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Drumsticks</h2>
                        </a>
                        <div className="price">
                            Rs 20
                        </div>
                    </div>

                </div>
                <div className="cards">
                    <a href="product.html">
                        <img className="medium" src="./images/orange.jpg" alt="potato"/>
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Orange</h2>
                        </a>
                        <div className="price">
                            Rs 25
                        </div>
                    </div>
                </div>
                </div>
            
        </main>
        <footer className="row center">
            EShop welcomes you to buy our 4 products
        </footer>

    </div>
  );
}
export default App;