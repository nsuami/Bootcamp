import React from "react";
import "../public/App.css";
function Hobbies({ hobbies }) {
  return (
    <div className="Column">
      <h4>Hobbies</h4>
      <ul>
        {hobbies.map((selected) => (
          <li>{selected}</li>
        ))}
      </ul>
    </div>
  );
}

export default Hobbies;
