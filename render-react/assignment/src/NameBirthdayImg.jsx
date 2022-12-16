import React from "react";
import "../public/App.css";
// DONE

function NameBirthdayImg({ catName, birthday, image }) {
  const imageCol = <img className="image Column" src={image} alt="Kitty" />;
  const nameBirthdayCol = (
    <div className="Column">
      <h1>{catName}</h1>
      <h3>Birthday: {birthday}</h3>
    </div>
  );

  return (
    <div className="Row">
      {imageCol}
      {nameBirthdayCol}
    </div>
  );
}
export default NameBirthdayImg;
