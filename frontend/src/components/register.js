import React from 'react'

export default function register() {
  return (
      <div>
        <nav>
          <div className="logo"><i className="fa-solid fa-cart-shopping" /></div>
          <div className="main"><ul><a href="index.html"><li>asosiy</li></a>
              <a href="#"><li>haqida</li></a> 
              <a href="./products.html"><li>mahsulotlar</li></a></ul></div>
          <div className="left"><a href="#"><i><i className="fa-brands fa-telegram" /></i></a><a href="#"><i><i className="fa-brands fa-instagram" /></i></a><a href="#"><i><i className="fa-solid fa-phone" /></i></a></div>
        </nav>
        <div className="form">
          <div className="form-toggle" />
          <div className="form-panel one">
            <div className="form-header">
              <h1>Kassa</h1>
            </div>
            <div className="form-content">
              <form>
                <div className="form-group">
                  <label htmlFor="username">mahsulot</label>
                  <input type="text" disabled id="username" defaultValue="sada" name="username" required="required" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">telefon raqamingiz:</label>
                  <input type="password" id="password" name="password" required="required" />
                </div>
                <div className="form-group">
                  <button type="submit">buyurtna berish</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

)};