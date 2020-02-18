import React from "react";
import './Header.scss';

const Header = (props) => {
    return (
        <div className={`header ${props.className || ''}`}>
            <nav className="header__navigation">
                <ul className="header__navigation-list">
                    <li className="header__navigation-item">
                        <a href="">home</a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="">portfolio</a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="">about us</a>
                    </li>
                    <li className="header__navigation-item">
                        <a href="">contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
export default Header;