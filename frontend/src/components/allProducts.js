import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FaShoppingCart,FaTelegram,FaInstagram} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import {RiMenu3Line} from 'react-icons/ri'



function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const handleSearch = () => {
    const filteredResults = allProducts.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
  };

  useEffect(() => {
    fetch("https://55ff-213-230-92-18.ngrok-free.app/product/", {
      method: 'GET',
      mode: 'cors',
      dataType: 'json',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        setResults(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    handleSearch();
  }, [query]);
  const [showDiv, setShowDiv] = useState(false);

  
  
  const classes = 'navbar-collapse collapse'

  function handleButtonClick() {
    setShowDiv(!showDiv);
  }
  return (
    <div className="container-fluid pt-5 pb-3">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <a className="navbar-brand" href="#"><i><FaShoppingCart/></i></a>
        <button className="navbar-toggler collapsed"onClick={handleButtonClick} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><RiMenu3Line/></span>
        </button>
        <div className={`${classes} ${showDiv ? 'show' : 'hide'}`} id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Asosiy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">Mahsulotlar</a>
            </li>
            
          </ul>
          
        </div>
        <div className="d-flex ">
        <i className='ml-5 mr-4 '><FaTelegram/></i><i className='mr-4'><FaInstagram/></i><i className='mr-3'><BsTelephone/></i>
      </div>
        <form className="d-flex" role="search">
        <input className="form-control me-2"value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={handleSearch} type="submit">Search</button>
      </form>
      
      </div>
        </nav>
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3" id="search-text">
          Mahsulotlar
        </span>
      </h2>     
      <div className="row px-xl-4">
        {results.map(item => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 col-12 pb-1">
            <div className="product-item bg-light mb-4">
              <Link to={`/products/${item.id}`}>
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={item.images} alt="" />
                  <div className="product-action">
                    <a className="btn btn-outline-dark btn-square" href="">
                      <Link to={`/products/${item.id}`}>
                        <i className="fa fa-shopping-cart" />
                      </Link>
                    </a>
                  </div>
                </div>
              </Link>
              <div className="text-center py-4">
                <a className="h6 text-decoration-none text-truncate" href="#">
                  <Link to={`/products/${item.id}`}>
                    {item.name}
                  </Link>
                </a>
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>{item.price}</h5>
                </div>
                <small>{item.producttype}</small>
                <h6>sotuvchi:{item.sotuvchi}</h6>
                </div>
              </div>
              </div>
        ))}</div>
        
      
        
        </div>
    
        )
  // return (
  //   <div>
  //     <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
  //     <button onClick={handleSearch}>Search</button>
  //     <ul>
  //       {results.map((item) => (
  //         <li key={item._id}>
  //           <p>{item.name}</p>
  //           <p>{item.price}</p>
  //           {/* Add more fields as needed */}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default Search;















// import React, { useState, useEffect } from "react";


// export default function AllProducts() {
//   const [products, setProducts] = useState([]);
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const handleSearch = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/search?q=${query}`);
//       const data = await response.json();
//       setResults(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/product/", {
//       method: 'GET',
//       mode: 'cors',
//       dataType: 'json',
//       headers: {
//         'Accept': 'application/json'
//       }
//     })
//       .then((response) => response.json())
//       .then((products) => {
//         setProducts(products);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//   }, []);

// }
