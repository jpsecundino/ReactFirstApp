import React, {Component} from 'react';
import styled from 'styled-components';

const LogUnicaBotaoStyle = styled.button`
    background-color: #fb9808;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`;

const Description = styled.span`
    font-size:8px;
`;

class LoginUnica extends Component{
    render(){

       return( 
           <React.Fragment>
            <h2>Senha Única da USP</h2>

            <div>Se você é um aluno da USP então não perca tempo fazendo<br/> o cadastro!<br/>
            Basta fazer login com a sua Senha Única (A mesma que você usa<br/> para entrar no Júpiter ou no Janus)<br/><br/>
            
            <Description>Dados coletados: Nome, e-mail, e-mail alternativo e Nº USP</Description></div>
                
            <LogUnicaBotaoStyle id = "loginunica">ENTRAR COM A SENHA ÚNICA <img src = "https://i.imgur.com/tlS3uGb.png" alt ="bugou" width = "15px"/> </LogUnicaBotaoStyle>
            </React.Fragment>
        )
     }
}

export default LoginUnica;