import React, { useState } from "react";
import "./App.css";

function App() {
  const [subscribed, setSubscribed] = useState(false);
  console.log("Subscribed status:", subscribed);
  const [alerts, setAlerts] = useState(false);
  console.log("Email alert status:", alerts);

  return (
    <section>
      <p>Please click to subscribe to my updates!</p>
      <button onClick={() => setSubscribed(!subscribed)}>
        {subscribed ? "Unsubscribe" : "Subscribe"}
      </button>
      <button onClick={() => setAlerts(!alerts)}>
        {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
      </button>
    </section>
  );
}

export default App;
