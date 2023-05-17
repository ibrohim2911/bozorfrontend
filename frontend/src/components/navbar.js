import React from 'react';
import {FaShoppingCart,FaTelegram,FaInstagram} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'

import { Link } from 'react-router-dom';

export default function Header() {

  
    return (
      <div>
        <nav className="nav">
          <div className="logo">
            <i  ><FaShoppingCart/></i>
          </div>
          <div className="main">
            <ul>
              <a href="/" >
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
        </nav></div>
    )}