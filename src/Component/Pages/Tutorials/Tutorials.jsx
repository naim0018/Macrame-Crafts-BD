import React, { useState, useEffect } from "react";
import TutorialCards from "../Common/TutorialCards/TutorialCards";

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
      <div className=" border  container mx-auto my-10 place-content-center drop-shadow-lg shadow-lg">
      {
        tutorials.map(tutorial => <TutorialCards key={tutorial.id} tutorial ={tutorial}/>)
      }
      </div>
    </div>
  );
};

export default Tutorials;
