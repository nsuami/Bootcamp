import React from "react";

function Clock() {
  const time = new Date().getHours();

  switch (true) {
    case time < 12:
      return <p>Good Morning!</p>;
    case time >= 12 && time <= 18:
      return <p>Good Afternoon!</p>;
    case time > 18:
      return <p>Good Evening!</p>;
  }
}

export default Clock;
