
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

const useTutorialsData = () => {

    const tutorials = useQuery({
        queryKey:["tutorials"],
        queryFn:async()=>{
            const {data} =await axios.get("https://macrame-crafts-server.vercel.app/tutorials")
            return data
        }
    })

    return tutorials
};

export default useTutorialsData;

