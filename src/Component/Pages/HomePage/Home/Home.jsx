import React from 'react';
import Featured from '../Featured/Featured';
import Banner from '../../Banner/Banner/Banner';
import HotDeals from '../HotDeals/HotDeals';


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