import React from "react";
import Header from "./Header";
import './FirstScreen.scss';
import Button from "./Button";
import Wrapper from "./Wrapper";
const FirstScreen = (props) => {
    return (
        <div className={`first ${props.className || ''}`}>
            <Wrapper className='first__wrapper'>
                <Header className="first__header"/>
                <div className="first__content">
                    <div className="first__left">
                        <h1 className="first__heading">
                            our strong organaisation
                        </h1>
                        <p className='first__text'>
                            Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                            sed do eiusmod tempor incididunt  ut labore et.
                            ectetur adig ipis cing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <Button className='first__button'>Contact Us</Button>
                    </div>
                    <div className="first__right">
                        <div className="first__video-box">
                            <iframe width='100%' height="100%" src="https://www.youtube.com/embed/bebuiaSKtU4"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>

                            </iframe>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};
export default FirstScreen;