import React from "react";
import './Ticket.scss';
const Ticket = (props) => {
    return (
        <li className={`ticket ${props.className || ''}`}>
            <div className="ticket__icon">
                {props.icon}
            </div>
            <h3 className='ticket__heading'>
                {props.heading}
            </h3>
            <p className="ticket__text">
                {props.text}
            </p>
        </li>
    )
};
export default Ticket;