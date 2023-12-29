<<<<<<< HEAD
import React from "react";
import Featured from "../Featured/Featured";
import HotDeals from "../HotDeals/HotDeals";
import Banner from "../Banner/Banner/Banner";
import { Helmet } from "react-helmet-async";
import MessengerCustomerChat from "react-messenger-customer-chat";
=======

import Featured from '../Featured/Featured';
import HotDeals from '../HotDeals/HotDeals';
import Banner from '../Banner/Banner/Banner';
import { Helmet } from 'react-helmet-async';
>>>>>>> 2d4245125cbc707f5a4b7e342b6ed921715a3c2c
import NewArrival from '../NewArrival/NewArrival';


const Home = () => {
  return (
    <div>
      <div>
        <MessengerCustomerChat
          pageId="189583830894761"
          appId="1104437644259163"
        />
        
      </div>
      <Helmet>
        <title>Macrame Carft BD | Home</title>
      </Helmet>
      <Banner />
      <Featured />
      <HotDeals />
    </div>
  );
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
