import React from "react";
import Wrapper from './Wrapper';
import './Footer.scss';

const Footer = (props) => {
    return (
        <footer className={`footer ${props.className || ''}`}>
            <Wrapper>
                <p className='footer__copyright'>
                    © Copyright @Junaed 2016, All rights reserved.
                </p>
            </Wrapper>
        </footer>
    )
};
export default Footer;