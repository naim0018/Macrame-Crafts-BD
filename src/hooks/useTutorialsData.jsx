import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useTutorialsData = () => {
    const [tutorials,setTutorials] = useState([]);
    useEffect(() => {
        fetch("Tutorials.json") 
          .then((res) => res.json())
          .then((data) => {
            setTutorials(data);
            console.log(data); 
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
      return tutorials;
};

export default useTutorialsData;