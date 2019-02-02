import React from "react";
import { Link } from "react-router-dom";

const Dogs = props => {
  var selectedDog = props.match.params.Dogs;
  return (
    <div>
      <h2>{selectedDog}</h2>
      <ul>
        {dogs[selectedDog].map((god, i) => (
          <Link to={`/${selectedDog}/${dog.id}`} key={i}>
            <li>{dog.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Dogs;
