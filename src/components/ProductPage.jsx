import React, { useState, useEffect } from 'react';

function ProductPage({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div>
      <h2>Products:</h2>
      <div className="products">
      {products.map((product) => (
				<div key={product.id} className="card" style={{ width: '17rem',height:'25rem' }}>
					<img src={product.image} className="card-img-top" alt="..." style={{width:"150px",height:"150px"}}/>
					<div className="card-body">
						<h5 className="card-title">{product.title}</h5>
						<p className="card-text">{product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
					</div>
				</div>
			))}
      </div>
    </div>
  );
}

export default ProductPage;
