import React from "react";

const title = "good boy";
const subHeading =
  "Hey there fren, you looking for a forever doggo to feed schmackos and take for regular walkies? Please give me some information and I can let you know which breed of pupper would best work for you";
const icon = "https://img.icons8.com/color/48/000000/hachiko.png";

const Header = () => {
  return (
    <div id="wrap">
      <hgroup id="header">
        <h1>{title}</h1>
        <h2 className="content">
          <img src={icon} />
          {subHeading}
        </h2>
      </hgroup>
    </div>
  );
};

export default Header;
