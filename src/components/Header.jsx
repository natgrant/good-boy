import React from "react";

const title = "good boy";
const subHeading =
  "Doggo ipsum mlem borkdrive snoot most angery pupper I have ever seen boof, clouds thicc clouds. Big ol pupper very taste wow most angery pupper I have ever seen adorable doggo doge, fluffer heckin angery woofer noodle horse woofer, boof sub woofer doggo. Pats what a nice floof most angery pupper I have ever seen very hand that feed shibe, adorable doggo.";
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
