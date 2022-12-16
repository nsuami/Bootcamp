import React from "react";
import { useLocation } from "react-router-dom";
export default function NoMatch() {
  const location = useLocation();
  return (
    <>
      <h1>404! -__-</h1>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </>
  );
}
