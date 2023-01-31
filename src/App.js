import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Modal from './Components/Modal/ModalPortal';
import { useGlobalContext } from './States/Context/Context';
import Header from './Components/Header/Header';



function App() {
  const {modalhandler} = useGlobalContext()
  return (
    <div className="App">
    <div className='main-body'>
      <Header></Header>
    </div>
    </div>
  );
}

export default App;
