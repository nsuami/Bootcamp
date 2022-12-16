import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const [timestamps, setTimestamps] = useState([]);
  const timeStampPush = () => {
    setTimestamps([...timestamps, Date.now()]);
  };
  return (
    <div>
      <TimestampsDisplay timestamps={timestamps} />
      <ClickTimes timeStampPushHandler={timeStampPush} />
    </div>
  );
}

export default App;
