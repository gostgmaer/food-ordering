import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Modal from './Components/Modal/ModalPortal';
import { useGlobalContext } from './States/Context/Context';
import Header from './Components/Header/Header';
import AppRouting from './Utility/Routing/AppRouting';
import CartProvider from './store/cartProvider';



function App() {

  return (
    <CartProvider>
    <div className="App">
    <div className='main-body'>
      <Header></Header>
      <AppRouting></AppRouting>
    </div>
    </div></CartProvider>
  );
}

export default App;
