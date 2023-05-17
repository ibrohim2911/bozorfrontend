import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://kok-bozor.uz/bruh4api/product/", {
      method: 'GET',
      mode: 'cors',
      dataType: 'json',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  return (
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">
          tavsiya etiladigan mahsulotlar
        </span>
      </h2>

      
      <div className="row px-xl-4">{products.map(product => (
        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 pb-1">

          <div className="product-item bg-light mb-4">
          <Link to={`/products/${product.id}`}>
            <div className="product-img position-relative overflow-hidden">
             
              
                <img className="img-fluid w-100" src={product.images} alt="" />
        
              <div className="product-action">
                <a className="btn btn-outline-dark btn-square" href=""><Link to={`/products/${product.id}`}>
                  <i className="fa fa-shopping-cart" ><FaShoppingCart/></i></Link>
                </a>
              </div>
            </div></Link>
            <div className="text-center py-4">
              <a className="h6 text-decoration-none text-truncate" href=""><Link to={`/products/${product.id}`}>
                {product.name}</Link>
              </a>
              <div className="d-flex align-items-center justify-content-center mt-2">
                <h5>{product.price}</h5>
              </div>
              <small>{product.producttype}</small>
              <h6>sotuvchi:{product.sotuvchi}</h6>
            </div>
          </div>
        </div>


      ))}
      </div>





    </div>
  );
}
