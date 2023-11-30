import React, { useState, useEffect } from 'react';

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    fetch('Tutorial.json') // Ensure the file path is correct
      .then(res => res.json())
      .then(data => {
        setTutorials(data);
        console.log(data); // Move console.log here to properly log fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Connected</h1>
      {/* Render your tutorials here */}
      <ul>
        {tutorials.map(tutorial => (
          <li key={tutorial.id}>
            <h2>{tutorial.title}</h2>
            <p>{tutorial.description}</p>
            {/* Add other tutorial information you want to display */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tutorials;
