import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Header from './components/Header';
import LoginUnica from './components/LoginUnica';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <h1 id = "titulo">ENTRAR</h1>
      <Login></Login>
      <LoginUnica></LoginUnica>
    </React.Fragment>
  );
}

export default App;
