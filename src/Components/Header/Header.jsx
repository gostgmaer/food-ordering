import React from 'react'
import './Header.scss'
import {MdShoppingCart  } from "react-icons/md";
const Header = () => {
  return (
    <header className='Header'>
      <div className="headerWrapper">
      <div className="logo">Kishor Food Shop</div>
      <div className="cart">
      <span className='text'>Your Cart</span>  <MdShoppingCart></MdShoppingCart>
         <span className='count'>2</span>
      </div>
      </div>
    </header>
  )
}

export default Header