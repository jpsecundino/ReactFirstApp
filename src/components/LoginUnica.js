import React, {Component} from 'react';

class LoginUnica extends Component{
    render(){

       return( 
           <React.Fragment>
            <h2>Senha Única da USP</h2>
            <p>Se você é um aluno da USP então não perca tempo fazendo o cadastro!</p>
            <p>Basta fazer login com a sua Senha Única (A mesma que você usa para entrar no Júpiter ou no Janus</p>
            <p id = "dadoscoletados">Dados coletados: Nome, e-mail, e-mail alternativo e Nº USP</p>
                
            <button id = "loginunica">ENTRAR COM A SENHA ÚNICA</button>
            </React.Fragment>
        )
     }
}

export default LoginUnica;