import React, { Fragment, useContext, useEffect } from 'react'
import './Header.scss'
import { MdShoppingCart } from "react-icons/md";
import CartBlock from '../CartBlock/CartBlock';
import Modal from '../Modal/ModalPortal';
import { useGlobalContext } from '../../States/Context/Context';
import CartContext, { useCartContext } from '../../store/Cart-context';
import { DUMMY_MEALS } from '../../assets/Data';

const Header = () => {
  const { item } = useCartContext()


  const noOfItems = item.reduce((initial, item) => (initial + item.amount), 0)


  const { modalhandler } = useGlobalContext()
  return (
    <header className='Header'>
      <div className="headerWrapper">
        <div className="logo">Kishor Food Shop</div>
        <div onClick={modalhandler} className="cart">
          <span className='text'>Your Cart</span>  <MdShoppingCart></MdShoppingCart>
          <span className='count'>{item?.length ? item.length : 0}</span>
        </div>

      </div>
      <Modal ModalContent={<CartBlock></CartBlock>} ClassName={'cartBlockModal'} ></Modal>
    </header>
  )
}

export default Header