import React from "react";
import "../public/App.css";
function Activities({ activities }) {
  if (!activities) {
    return <div></div>;
  } else {
    return (
      <table className="Column box">
        <tbody className="plain Table">
          {activities.map((selected, index) => (
            <tr key={index}>
              <td>{selected.time}</td>
              <td>{selected.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Activities;
