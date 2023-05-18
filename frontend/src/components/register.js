import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from './navbar'
export default function Register() {
  const [product, setProduct] = useState({ name: '' });
  const [customernum, setCustomernum] = useState('');
  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://bruh4python.pythonanywhere.com/product/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));

  }, [productId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // send data to backend here
    fetch('https://bruh4python.pythonanywhere.com/orders/send/', {
      method: 'POST',
      body: JSON.stringify({ product: productId, customernum: customernum }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    navigate('/')  
    
  };

  return (
    <div>
      <Navbar/>
      <div className="form">
        <div className="form-toggle" />
        <div className="form-panel one">
          <div className="form-header">
            <h1>Kassa</h1>
          </div>
          <div className="form-content">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">mahsulot</label>

                <input
                  type="text"
                  disabled
                  id="username"
                  value={product.name}
                />
                <input
                  type="hidden"
                  id="username"
                  name="product"
                  required="required"
                  value={productId}
                  onChange={(event) => setProduct({ ...product, id: event.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">telefon raqamingiz:</label>
                <input
                  type="number"
                  id="password"
                  name="customernum"
                  required="required"
                  value={customernum}
                  onChange={(event) =>
                    setCustomernum(event.target.value)}/>
                    
                    </div><div className="form-group">
                <button type="submit" >buyurtma berish</button>
              </div></form></div></div></div></div>
                  )}
