import React from 'react';
import Featured from '../Featured/Featured';
import HotDeals from '../HotDeals/HotDeals';
import Banner from '../Banner/Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner/> 
            <Featured/>
            <HotDeals/>
        </div>
    );
};

export default Home;