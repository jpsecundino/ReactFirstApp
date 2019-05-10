import React, {Component} from 'react';

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
                    <button class = "entrada_botao"id = "entrar">ENTRAR</button>
                    </div>
                </form>
                <button class = "entrada_botao" id = "esquecisenha">ESQUECI MINHA SENHA</button>
                <button class = "entrada_botao" id = "cadastrar">CADASTRAR</button>
            </React.Fragment>
        )    
    }
}

export default Login;
