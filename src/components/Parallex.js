import React from "react";

const Parallex = () => {
  return (
    <div className="wrapper">
      <div className="polygon">
        <svg preserveAspectRatio="none" viewBox="0 0 100 100">
          <polygon points="100,100 100,0 0,100" opacity="1" />
        </svg>
        <svg
          id="polygon-1"
          x="0px"
          y="0px"
          viewBox="0 0 1440 270"
          enableBackground="new 0 0 1440 270"
        >
          <polygon points="1440,0 0,230 0,270 1440,40 " />
        </svg>
      </div>
    </div>
  );
};

export default Parallex;
