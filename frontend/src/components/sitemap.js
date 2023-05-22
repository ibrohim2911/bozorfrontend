import React, { Component } from 'react'

export default class Sitemap extends Component {
  render() {
    return (
      <div>
        <ul>
    <li><a href="/">Home</a></li>
    <li>
      Products
      <ul>
        <li><a href="/products/">All Products</a></li>
        <li><a href="/products/{productId}">Product Detail</a></li>
        <li><a href="/buying/{productId}">Register/Buying</a></li>
      </ul>
    </li>
    <li><a href="/categories/">Categories</a></li>
    <li><a href="/404">Page Not Found (404)</a></li>
  </ul>
      </div>
    )
  }
}
