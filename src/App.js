import React from 'react';
import data from './data';

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
              {
                data.products.map(product=>(
                  <div key = {product._id} className="cards">
                    <a href={`/product/${product._id}`}>
                        <img className="medium" src={product.image} alt={product.name}/>
                    </a>
                    <div className="card-body">
                    <a href={`/product/${product._id}`}>
                            <h2>{product.name}</h2>
                        </a>
                        <div className="price">
                            {product.price}
                        </div>
                    </div>

                </div>
                ))
              }
                
            
        
                </div>
            
        </main>
        <footer className="row center">
            EShop welcomes you to buy our 4 products
        </footer>

    </div>
  );
}
export default App;