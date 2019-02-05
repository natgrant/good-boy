import React from "react";

const Parallex = () => {
  return (
    <div className="wrapper">
      <div className="polygon">
        <svg preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="100,100 100,0 0,100" opacity="1" />
        </svg>
      </div>
    </div>
  );
};

export default Parallex;
