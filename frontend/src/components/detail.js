import React, {useState,useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import Navbar from './navbar'
export default function detail() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();
  
  useEffect(() => {
    fetch(`https://kok-bozor.uz/bruh4api/product/${productId}/`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
        <div>
          <Navbar/>

          <div className="container-fluid pb-5 mt-5">
            <div className="row px-xl-5">
              <div className="col-lg-5 mb-30">
                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner bg-light">
                    <div className="carousel-item active">
                       <img className="w-100 h-100" src={product.images} alt="Image" /> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                  <h3>{product.name}</h3>
                  <div className="d-flex mb-3">
                  </div>
                  <h3 className="font-weight-semi-bold mb-4">{product.price}</h3>
                  <p className="mb-4">{product.full_detail}</p>
                  <h6>sotuvchi:{product.sotuvchi}</h6>
                  <div className="d-flex align-items-center mb-4 pt-2">
                    <Link to={`/buying/${product.id}`}> <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1" />sotib olish</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
  )
}
