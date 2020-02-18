import React from "react";
import Wrapper from "./Wrapper";
import './ThirdScreen.scss';
import Gallery from "./Gallery";
const ThirdScreen = (props)=>{
    return(
        <div className={`third ${props.className || ''}`}>
            <Wrapper className='third__wrapper'>
                <h2 className="third__heading">
                    feature products
                </h2>
                <p className="third__subheading">
                    Lorem ipsum dolor sit amet, consectetur
                    adipis cing elit,sed do eiusmod tempor
                    incididunt ut labore et.
                </p>
                <span className="third__line-decor"></span>
                <Gallery className="third__gallery"/>
            </Wrapper>
        </div>
    )
};

export default ThirdScreen;