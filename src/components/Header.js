import React, {Component} from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    background-color: #004f78;
    display: flex;
    justify-content: space-between;
    padding-left:20px;
    padding-top : 11px;
    padding-bottom : 5px;
`;

const HeaderButton = styled.a`
    background-color:#004f78;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    font-weight: bold;
`;


class Header extends Component{
    render() {
        return (
            <React.Fragment>
                <HeaderStyle>
                <a href = "/public/index.html">
                <img src = "https://i.imgur.com/aKOrckk.png" width = "250px"/>
                </a>
                <HeaderButton href = "/public/index.html">Entrar</HeaderButton>
                </HeaderStyle>
            </React.Fragment>
        )
    }
}

export default Header;