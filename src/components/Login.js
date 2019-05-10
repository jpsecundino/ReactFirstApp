import React, {Component} from 'react';
import styled from 'styled-components';

const EntradaBotaoStyle = styled.button`
    background-color: #4c83a1;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
`;

const Input = styled.input`
  padding: 0.5em;

  color: ${props => props.inputColor || "palevioletred"};
  border: none;
  border-bottom: 1.5px solid lightgray;
  width: 500px;
  height:50px;
`;

class Login extends Component{
    render(){
        return(
            <React.Fragment>
                <h2>E-mail e Senha</h2>
                <form class = "formlogin">
                    <label for="email"></label>
                    <Input class = "entrada_login"name = "email" id = "email" type = "email" placeholder = "E-mail" required/><br/>
                    <label for = "password"> </label><br/>
                    <Input class = "entrada_login" name = "password" id = "password" type = "password" placeholder = "Senha" pattern =".{5,30}" required/>
                    <div><br/>
                    <EntradaBotaoStyle class = "entrada_botao"id = "entrar">ENTRAR</EntradaBotaoStyle>
                    </div>
                </form>
                <br/>
                <EntradaBotaoStyle class = "entrada_botao" id = "esquecisenha">ESQUECI MINHA SENHA</EntradaBotaoStyle><br/>
                <EntradaBotaoStyle class = "entrada_botao" id = "cadastrar">CADASTRAR</EntradaBotaoStyle>
            </React.Fragment>
        )    
    }
}

export default Login;
    