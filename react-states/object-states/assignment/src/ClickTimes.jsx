import React from "react";

function ClickTimes(props) {
  return (
    <div>
      <button onClick={() => props.timeStampPushHandler()}>bruh</button>
    </div>
  );
}

export default ClickTimes;
