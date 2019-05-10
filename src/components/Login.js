import React, {Component} from 'react';
import styled from 'styled-components';

const EntradaBotaoStyle = styled.div`
    background-color: #4c83a1;
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

class Login extends Component{
    render(){
        return(
            <React.Fragment>
                <h2>E-mail e Senha</h2>
                <form class = "formlogin">
                    <label for="email"></label>
                    <input class = "entrada_login"name = "email" id = "email" type = "email" placeholder = "E-mail" required/>
                    <label for = "password"> </label>
                    <input class = "entrada_login" name = "password" id = "password" type = "password" placeholder = "Senha" pattern =".{5,30}" required/>
                    <div>
                    <EntradaBotaoStyle><button class = "entrada_botao"id = "entrar">ENTRAR</button></EntradaBotaoStyle>
                    </div>
                </form>
                <button class = "entrada_botao" id = "esquecisenha">ESQUECI MINHA SENHA</button>
                <button class = "entrada_botao" id = "cadastrar">CADASTRAR</button>
            </React.Fragment>
        )    
    }
}

export default Login;
    