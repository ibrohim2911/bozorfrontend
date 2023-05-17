import React from 'react'

export default function filtered() {
  return (
        <div>
          <nav>
            <div className="logo"><i className="fa-solid fa-cart-shopping" /></div>
            <div className="main"><ul><a href="index.html"><li>asosiy</li></a>
                <a href="#"><li>haqida</li></a> 
                <a href="./products.html"><li>mahsulotlar</li></a></ul></div>
            <div className="left"><a href="#"><i><i className="fa-brands fa-telegram" /></i></a><a href="#"><i><i className="fa-brands fa-instagram" /></i></a><a href="#"><i><i className="fa-solid fa-phone" /></i></a></div>
          </nav>
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">saralangan mahsulotlar</span></h2>
          <div className="row px-xl-5"><a href="detail.html">
            </a><div className="col-lg-3 col-md-4 col-sm-6 pb-1"><a href="detail.html">
              </a><div className="product-item bg-light mb-4"><a href="detail.html">
                </a><div className="product-img position-relative overflow-hidden"><a href="detail.html">
                    {'{'}/* <img className="img-fluid w-100" src="img/product-2.jpg" alt="" /> */{'}'}
                  </a><div className="product-action"><a href="detail.html">
                    </a><a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-shopping-cart" /></a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href="#">Product Name Goes Here</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$123.00</h5>
                  </div><small>mahsulot turi</small><h6>sotuvchi: Muhammad</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
