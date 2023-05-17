import React from 'react'

export default function filtered(props) {
  const { products } = props;

  return (
    <div>
      <nav>
        <div className="logo"><i className="fa-solid fa-cart-shopping" /></div>
        <div className="main">
          <ul>
            <a href="index.html"><li>asosiy</li></a>
            <a href=""><li>haqida</li></a> 
            <a href="./products.html"><li>mahsulotlar</li></a>
          </ul>
        </div>
        <div className="left">
          <a href="https://t.me/bruh4anything">
            <i>
              <i className="fa-brands fa-telegram" />
            </i>
          </a>
          <a href="https://instagram/best_brands">
            <i>
              <i className="fa-brands fa-instagram" />
            </i>
          </a>
          <a href="tel:998883287600">
            <i>
              <i className="fa-solid fa-phone" />
            </i>
          </a>
        </div>
      </nav>
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">saralangan mahsulotlar</span></h2>
      <div className="row px-xl-5">
        {products.map(product => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className="product-item bg-light mb-4">
              <div className="product-img position-relative overflow-hidden">
                <img className="img-fluid w-100" src={product.images} alt="" />
                <div className="product-action">
                  <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="">{product.name}</a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>{product.price}</h5>
                </div>
                <small>mahsulot turi</small>
                <h6>sotuvchi: {product.seller_id}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
