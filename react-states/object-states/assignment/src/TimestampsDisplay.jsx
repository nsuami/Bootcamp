import React from "react";

function TimestampsDisplay({ timestamps }) {
  return (
    <ol>
      {timestamps.map((ts, i) => (
        <li key={i}>{new Date(ts).toLocaleString()}</li>
      ))}
    </ol>
  );
}

export default TimestampsDisplay;
