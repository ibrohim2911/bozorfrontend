import React, {useState} from "react";
import {FaShoppingCart,FaTelegram,FaInstagram,FaCheck,FaShippingFast,FaPhoneVolume,FaExchangeAlt} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import { Link } from 'react-router-dom';
export default function Header() {

  
  return (
    <div>
      <nav className="nav">
        <div className="logo"> <p className="logoname">Ko'k Bozor</p> 
          <i  ><FaShoppingCart/></i>
        </div>
        <div className="main">
          <ul>
            <a href="#" >
              <li>Asosiy</li>
            </a>
            <Link to={'/products'}><li>Mahsulotlar</li>
            </Link>
          </ul>
        </div>
        <div className="left">
          <a href="https://t.me/bruh4anything">
            <i>
              <FaTelegram />
            </i>
          </a>
          <a href="https://instagram.com/kokbozor.uz?igshid=ZGUzMzM3NWJiOQ==">
            <i>
              <FaInstagram />
            </i>
          </a>
          <a href="tel:998883287600">
            <i>
              <BsTelephone />
            </i>
          </a>
        </div>
      </nav>
      <div className="container-fluid mb-3">
        <div className="row px-xl-5">
          <div className="col-lg-12">
            <div
              id="header-carousel"
              className="carousel slide carousel-fade mb-30 mb-lg-0"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#header-carousel"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#header-carousel" data-slide-to={1} />
                <li data-target="#header-carousel" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div
                  className="carousel-item position-relative active"
                  style={{ height: "500px" }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/0ubxVU8DtcKX391FxXvy4DstJi4jnefP.jpg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Zamonaviy shimlar qulay narxlarda
                      </p>
                      <a
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="/products"
                      >
                        buyurtma berish
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item position-relative"
                  style={{ height: "500px" }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/Screenshot_2.png"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        Klassik ko'ylaklar zamonaviy ko'rinishda
                      </p>
                      <a
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="/products"
                      >
                        buyurtma berish
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="carousel-item position-relative"
                  style={{ height: "500px" }}
                >
                  <img
                    className="position-absolute w-100 h-100"
                    src="img/aiia4.png"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                        
                      </h1>
                      <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                        sifatli teridan tikilgan oyoq kiyimlar
                      </p>
                      <a
                        className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                        href="/products"
                      >
                        buyurtma berish
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <h2 className="fa fa-check text-primary m-0 mr-3" ><FaCheck/></h2>
              <h5 className="font-weight-semi-bold m-0">
                sifatli va qulay narxlarda
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <h2 className="fa fa-shipping-fast text-primary m-0 mr-2"><FaShippingFast/>  </h2>
              <h5 className="font-weight-semi-bold m-0">
                bepul eltib berish(shahar ichida)
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <h2 className="fas fa-exchange-alt text-primary m-0 mr-3" ><FaExchangeAlt/></h2>
              <h5 className="font-weight-semi-bold m-0">
                7 kun ichida almashtirish
              </h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div
              className="d-flex align-items-center bg-light mb-4"
              style={{ padding: "30px" }}
            >
              <h2 className="fa fa-phone-volume text-primary m-0 mr-3" ><FaPhoneVolume/></h2>
              <h5 className="font-weight-semi-bold m-0">24/7 xizmat</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
