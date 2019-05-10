import React, {Component} from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    width:100%;
    height: 30px;   
    border-top: 1px solid #004f78;
    position:fixed;
    bottom:0;
    background: #4c83a1 ;
`;

class Footer extends Component{
    render() {
        return (
            <React.Fragment>
               <FooterStyle></FooterStyle>
            </React.Fragment>
        )
    }
}

export default Footer;