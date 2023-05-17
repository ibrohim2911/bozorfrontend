import React from 'react'

export default function detail() {
  return (
        <div>
          <nav>
            <div className="logo"><i className="fa-solid fa-cart-shopping" /></div>
            <div className="main"><ul><a href="index.html"><li>asosiy</li></a>
                <a href="#"><li>haqida</li></a> 
                <a href="#"><li>mahsulotlar</li></a></ul></div>
            <div className="left"><a href="#"><i><i className="fa-brands fa-telegram" /></i></a><a href="#"><i><i className="fa-brands fa-instagram" /></i></a><a href="#"><i><i className="fa-solid fa-phone" /></i></a></div>
          </nav>
          <div className="container-fluid pb-5">
            <div className="row px-xl-5">
              <div className="col-lg-5 mb-30">
                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner bg-light">
                    <div className="carousel-item active">
                      {'{'}/* <img className="w-100 h-100" src="img/product-1.jpg" alt="Image" /> */{'}'}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                  <h3>Product Name Goes Here</h3>
                  <div className="d-flex mb-3">
                  </div>
                  <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                  <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                    clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                    Nonumy</p>
                  <h6>sotuvchi: mohammad</h6>
                  <div className="d-flex align-items-center mb-4 pt-2">
                    <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1" />sotib olish</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid py-5">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">You May Also Like</span></h2>
            <div className="row px-xl-5">   
              <div className="col">
                <div className="owl-carousel related-carousel">
                  <div className="product-item bg-light">
                    <div className="product-img position-relative overflow-hidden">
                      {'{'}/* <img className="img-fluid w-100" src="img/product-1.jpg" alt="" /> */{'}'}
                      <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-shopping-cart" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="far fa-heart" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-sync-alt" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-search" /></a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <a className="h6 text-decoration-none text-truncate" href="#">Product Name Goes Here</a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small>(99)</small>
                      </div>
                    </div>
                  </div>
                  <div className="product-item bg-light">
                    <div className="product-img position-relative overflow-hidden">
                      {'{'}/* <img className="img-fluid w-100" src="img/product-2.jpg" alt="" /> */{'}'}
                      <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-shopping-cart" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="far fa-heart" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-sync-alt" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-search" /></a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <a className="h6 text-decoration-none text-truncate" href="#">Product Name Goes Here</a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small>(99)</small>
                      </div>
                    </div>
                  </div>
                  <div className="product-item bg-light">
                    <div className="product-img position-relative overflow-hidden">
                      {'{'}/* <img className="img-fluid w-100" src="img/product-3.jpg" alt="" /> */{'}'}
                      <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-shopping-cart" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="far fa-heart" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-sync-alt" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-search" /></a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <a className="h6 text-decoration-none text-truncate" href="#">Product Name Goes Here</a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small>(99)</small>
                      </div>
                    </div>
                  </div>
                  <div className="product-item bg-light">
                    <div className="product-img position-relative overflow-hidden">
                      {'{'}/* <img className="img-fluid w-100" src="img/product-4.jpg" alt="" /> */{'}'}
                      <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-shopping-cart" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="far fa-heart" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-sync-alt" /></a>
                        <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-search" /></a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <a className="h6 text-decoration-none text-truncate" href="#">Product Name Goes Here</a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small>(99)</small>
                      </div>
                    </div>
                  </div>
                  <div className="product-item bg-light">
                    <div className="product-img position-relative overflow-hidden">
                      {'{'}/* <img className="img-fluid w-100" src="img/product-5.jpg" alt="" /> */{'}'}
                      <div className="product-action">
                        <a className="btn btn-outline-dark btn-square" href><i className="fa fa-shopping-cart" /></a>
                        <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
                        <a className="btn btn-outline-dark btn-square" href><i className="fa fa-sync-alt" /></a>
                        <a className="btn btn-outline-dark btn-square" href><i className="fa fa-search" /></a>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <a className="h6 text-decoration-none text-truncate" href="#">Product Name Goes Here</a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small>(99)</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
