// import { useState, useEffect } from 'react';

// function ProductCategoryList(props) {
//     const originalText = props.producttype;
//     const convertedText = originalText.replace(/ /g, '+');
//     console.log(convertedText);
//   return (
//     <div>
//       <a href={`/categoried#${props.producttype.replace(/ /g, '+')}`}><h2>{props.producttype}</h2></a>
//       <ul>
//         {props.products.map(product => (
//           <li key={product.id}>
//             {product.name} - {product.price} USD
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function ProductListing() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [productType, setProductType] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:8000/product')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error(error));
//   }, []);

//   useEffect(() => {
//     if (productType === '') {
//       setFilteredProducts(products);
//       return;
//     }

//     const filtered = products.filter(product => product.producttype === productType);
//     setFilteredProducts(filtered);
//   }, [products, productType]);

//   useEffect(() => {
//     const hash = window.location.hash;
//     const newProductType = hash ? hash.substring(1) : '';
//     setProductType(newProductType);
//   }, []);

//   function groupProductsByCategory(products) {
//     const groupedProducts = {};
//     products.forEach(product => {
//       if (!groupedProducts[product.producttype]) {
//         groupedProducts[product.producttype] = [];
//       }
//       groupedProducts[product.producttype].push(product);
//     });
//     return groupedProducts;
//   }

//   const groupedProducts = groupProductsByCategory(filteredProducts);

//   return (
//     <div>
//       {Object.entries(groupedProducts).map(([producttype, products]) => (
//         <ProductCategoryList key={producttype} producttype={producttype} products={products} />
//       ))}
//     </div>
//   );
// }
// export default ProductListing
import { useState, useEffect } from 'react';
import { useLocation,Link } from 'react-router-dom';
import Navbar from './navbar'
function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('https://kok-bozor.uz/bruh4api/product')
      .then(response => response.json())
      .then(data => {
        const sortedProducts = data.sort((a, b) => a.producttype.localeCompare(b.producttype));
        setProducts(sortedProducts);
        setFilteredProducts(sortedProducts);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      const filteredProducts = products.filter(product => product.producttype === hash.replace(/\+/g, ' '));
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(products);
    }
  }, [location.hash, products]);

  return (
    <div>
        <Navbar/>
      <h2>Mahsulotlar</h2>
      {/* <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.full_detail}</p>
            <p>Price: ${product.price}</p>
            <p>Product type: {product.producttype}</p>
          </li>
        ))} */}
            <div className="row px-xl-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 pb-1">
            <div className="product-item bg-light mb-4">
              <Link to={`/products/${product.id}`}>
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={product.images} alt="" />
                  <div className="product-action">
                    
                      <Link className="btn btn-outline-dark btn-square" to={`/products/${product.id}`}>
                        <i className="fa fa-shopping-cart" />
                      </Link>
                    
                  </div>
                </div>
              </Link>
              <div className="text-center py-4">
                
                  <Link className="h6 text-decoration-none text-truncate" to={`/products/${product.id}`}>
                    {product.name}
                  </Link>
               
                <div className="d-flex align-items-center justify-content-center mt-2">
                  <h5>{product.price}</h5>
                </div>
                <small>{product.producttype}</small>
                <h6>sotuvchi:{product.sotuvchi}</h6>
                </div>
              </div>
              </div>
        ))}</div>
      {/* </ul> */}
    </div>
  );
}

export default ProductList