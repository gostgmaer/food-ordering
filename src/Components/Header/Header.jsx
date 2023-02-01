import React, { Fragment } from 'react'
import './Header.scss'
import { MdShoppingCart } from "react-icons/md";
import CartBlock from '../CartBlock/CartBlock';
import Modal from '../Modal/ModalPortal';
import { useGlobalContext } from '../../States/Context/Context';

const Header = () => {
  const {modalhandler} = useGlobalContext()
  return (
    <header className='Header'>
      <div className="headerWrapper">
        <div className="logo">Kishor Food Shop</div>
        <div onClick={modalhandler} className="cart">
          <span className='text'>Your Cart</span>  <MdShoppingCart></MdShoppingCart>
          <span className='count'>2</span>
        </div>

      </div>
      <Modal ModalContent={<CartBlock></CartBlock>} ClassName={'cartBlockModal'} ></Modal>
    </header>
  )
}

export default Header