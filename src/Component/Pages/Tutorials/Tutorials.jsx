import React, { useState, useEffect } from "react";

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch("Tuturial.json") //  Json file path is Name
      .then((res) => res.json())
      .then((data) => {
        setTutorials(data);
        console.log(data); //  properly log fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Tutorials</h1>
      
    </div>
  );
};

export default Tutorials;
