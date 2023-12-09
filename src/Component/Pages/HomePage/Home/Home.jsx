import React from 'react';
import Featured from '../Featured/Featured';
import HotDeals from '../HotDeals/HotDeals';
import Banner from '../Banner/Banner/Banner';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Macrame Carft BD | Home
                </title>
            </Helmet>
            <Banner/> 
            <Featured/>
            <HotDeals/>
        </div>
    );
};

export default Home;