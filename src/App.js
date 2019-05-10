import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Header from './components/Header';
import LoginUnica from './components/LoginUnica';
import Footer from './components/Footer';
import styled from 'styled-components';

const MainContent = styled.div` 
    display: flex;
    justify-content: space-around;
`;

function App() {
  return (
    <React.Fragment style="height:100%;">
      <Header></Header>
      <br/>
      <MainContent>
      <div>
      <h1 id = "titulo">ENTRAR</h1>
      <LoginUnica></LoginUnica>
      </div>
      <div>
      <Login></Login>
      </div>
      </MainContent>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
