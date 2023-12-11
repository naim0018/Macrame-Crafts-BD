import React from "react";
import Featured from "../Featured/Featured";
import HotDeals from "../HotDeals/HotDeals";
import Banner from "../Banner/Banner/Banner";
import { Helmet } from "react-helmet-async";
import MessengerCustomerChat from "react-messenger-customer-chat";

const Home = () => {
  return (
    <div>
      <div>
        <MessengerCustomerChat
          pageId="189583830894761"
          appId="1104437644259163"
        />
        ,
      </div>
      <Helmet>
        <title>Macrame Carft BD | Home</title>
      </Helmet>
      <Banner />
      <Featured />
      <HotDeals />
    </div>
  );
};

export default Home;
