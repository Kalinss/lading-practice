import React from "react";
import '../styles/reset.scss'
import './index.scss';

import FirstScreen from "../components/FirstScreen";
import SecondScreen from "../components/SecondScreen";
import ThirdScreen from "../components/ThirdScreen";
import LastScreen from "../components/LastScreen";
import Footer from "../components/Footer";

const Index = (props) => {
    return (
        <div className="main">
            <FirstScreen className='main__first'/>
            <SecondScreen className='main__second'/>
            <ThirdScreen className='main__third'/>
            <LastScreen className='main__last'/>
            <Footer className='main__footer'/>
        </div>
    )
};
export default Index;