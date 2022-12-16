const main = () => {
  // find an element with the class value
  const value = document.querySelector(".value");
  console.log(value);

  // find a button element
  const button = document.querySelector("button");
  console.log(button);

  // find element with the class area
  const area = document.querySelector(".area");
  console.log(area);

  // find a div that is a descendant of the class stat
  const div = document.querySelector(".stat div");
  console.log(div);

  // find all buttons
  const allButtons = document.querySelectorAll("button");
  console.log("All buttons: ");
  console.log(allButtons); //> returns a NODELIST.
  // a node is an HTML element when described as part of a DOM tree structure

  // find all h3's and log them
  const allH3 = document.querySelectorAll("h3");
  for (let element of allH3.values()) {
    console.log(element);
  }

  // get a list of descriptions and print them
  const list = document.querySelectorAll(".description");
  Array.prototype.forEach.call(list, (element) => {
    console.log(element);
  });
};
window.addEventListener("DOMContentLoaded", main);
