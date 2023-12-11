import React from 'react';
import Featured from '../Featured/Featured';
import HotDeals from '../HotDeals/HotDeals';
import Banner from '../Banner/Banner/Banner';
import { Helmet } from 'react-helmet-async';
import NewArrival from '../NewArrival/NewArrival';


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
            <NewArrival/>
        </div>
    );
};

export default Home;