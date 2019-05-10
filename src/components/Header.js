import React, {Component} from 'react';


class Header extends Component{
    render() {
        return (
            <React.Fragment>
                <a href = "/public/index.html">
                <img src = "https://i.imgur.com/won3VW7.png"/>
                </a>
                <a href = "/public/index.html">Entrar</a>
            </React.Fragment>
        )
    }
}

export default Header;