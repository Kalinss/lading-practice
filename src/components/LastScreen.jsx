import React from "react";
import './LastScreen.scss';
import Wrapper from "./Wrapper";
import './Input.scss'
const LastScreen = (props) => {
    return (
        <div className={`last ${props.className || ''}`}>
            <Wrapper className="last__wrapper">
                <h2 className="last__heading">
                    get in touch
                </h2>
                <p className="last__text">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                    eiusmod tempor incididunt ut labore et.ur adipis cing elit, sed
                    do eiusmod tempor incididunt ut labore et.
                    ur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.
                </p>
                <div className="last__line-decor">

                </div>
                <div className="last__content">
                    <form action="" className='last__form'>
                        <div className="last__form-top">
                            <input type="text" className="last__input input" placeholder='Name'/>
                            <input type="text" className="last__input input" placeholder='Your Mail'/>
                        </div>
                        <textarea className="last__textarea input" id="" placeholder='Type your message' />
                        <input type="submit" className='last__submit' value='Send message'/>
                    </form>
                    <div className="last__contact">
                        <h3 className="last__contact-heading">
                            contact info
                        </h3>
                        <div className="last__contact-text">
                            <p>Jalalabad 24 / A, Ambaarkhana, Sylhet,
                                Bangladesh</p>
                            <p>redwan@deviserweb.com</p>
                            <p>(+88) 017 617 46373</p>
                        </div>
                    </div>
                </div>

            </Wrapper>

        </div>
    )
};
export default LastScreen;