import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const name = "Abi";
const element = (
  <div className="card">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">React</li>
      <li className="list-group-item">JSX</li>
      <li className="list-group-item">Webpack</li>
    </ul>
  </div>
);
const url = "https://www.thinkful.com/";
const linkTag = <a href={url}>Thinkful</a>;
ReactDOM.render(
  <React.StrictMode>
    {element}
    {linkTag}
    <h1 className="hello">Hello World!</h1>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
