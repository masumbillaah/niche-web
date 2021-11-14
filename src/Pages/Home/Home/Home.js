import React from 'react';

import Banner from '../Banner/Banner';

import Services from '../Services/Services';
import ReviweShow from '../../Reviwe/ReviweShow';
import About from '../../About/About';



const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <About></About>
<ReviweShow></ReviweShow>

            
            
            
        </div>
    );
};

export default Home;