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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Modal ModalContent={<Header></Header>} ClassName="new" ></Modal>
        <button onClick={modalhandler}>modalhandler</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
