import React from "react";
import Wrapper from "./Wrapper";
import './SecondScreen.scss';
import Button from "./Button";
import Ticket from "./Ticket";

import IconSetting from './Icon/Setting';
import IconPencil from './Icon/Pencil';
import IconDiamond from './Icon/Diamond';
import IconTruck from './Icon/Truck';

const SecondScreen = (props) => {
    return (
        <div className={`second ${props.className || ''}`}>
            <Wrapper className='second__wrapper'>
                <div className="second__content">
                    <div className="second__left">
                        <h2 className="second__heading">
                            do you know we can
                            provide for you ?
                        </h2>
                        <p className="second__text">
                            Lorem ipsum dolor sit amet, consectetur
                            adipis cing elit, sed do
                            eiusmod tempor incididunt ut labore
                            et.Lorem ni ipsum dolor sit amet,
                            consectetur adipis cing elit,
                            ed doi eiusmod tempor incididunt ut labore et.
                        </p>
                        <Button className='second__button button--reverse'>Learn More</Button>
                    </div>
                    <div className="second__right">
                        <ul className="second__ticket-list">
                            <Ticket className="second__ticket-item"
                                    icon={<IconSetting/>}
                                    heading='Management'
                                    text='Lorem ipsum dolor sitea amet,
                                    zixf conseit  adipi cing elit,
                                    seddi do eiusmod btdempor
                                    in didunt utlae ore etioe.
                                    Lorem ipsum new idolor'
                            />
                            <Ticket className="second__ticket-item"
                                    icon={<IconPencil/>}
                                    heading='UI /UX Design'
                                    text='Lorem ipsum dolor sitea amet,
                                    zixf conseit  adipi cing elit,
                                    seddi do eiusmod btdempor
                                    in didunt utlae ore etioe.
                                    Lorem ipsum new idolor'
                            />
                            <Ticket className="second__ticket-item"
                                    icon={<IconDiamond/>}
                                    heading='Logo / Branding'
                                    text='Lorem ipsum dolor sitea amet,
                                    zixf conseit  adipi cing elit,
                                    seddi do eiusmod btdempor
                                    in didunt utlae ore etioe.
                                    Lorem ipsum new idolor'
                            />
                            <Ticket className="second__ticket-item"
                                    icon={<IconTruck/>}
                                    heading='Animation'
                                    text='Lorem ipsum dolor sitea amet,
                                    zixf conseit  adipi cing elit,
                                    seddi do eiusmod btdempor
                                    in didunt utlae ore etioe.
                                    Lorem ipsum new idolor'
                            />
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};
export default SecondScreen;