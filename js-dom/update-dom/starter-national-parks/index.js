const main = () => {
  // find an element with the class value
  // const value = document.querySelector(".value");
  // console.log(value);

  // find a button element
  // const button = document.querySelector("button");
  // console.log(button);

  // find element with the class area
  // const area = document.querySelector(".area");
  // console.log(area);

  // find a div that is a descendant of the class stat
  // const div = document.querySelector(".stat div");
  // console.log(div);

  // find all buttons
  // const allButtons = document.querySelectorAll("button");
  // console.log("All buttons: ");
  // console.log(allButtons); //> returns a NODELIST.
  // a node is an HTML element when described as part of a DOM tree structure

  // find all h3's and log them
  // const allH3 = document.querySelectorAll("h3");
  // for (let element of allH3.values()) {
  // console.log(element);
  // }

  // get a list of descriptions and print them
  const descriptions = document.querySelectorAll(".description");
  // Array.prototype.forEach.call(descriptions, (element) => {
  // console.log(element);
  // });

  // selecting each element of the querySelectorAll response
  // for (let desc of descriptions.values()) {
  // assigning 'content' to each desc's innerText property
  // let content = desc.innerText;
  // log content
  // console.log(content);
  // is it longer than 250 char?
  // if (content.length > 250) {
  // cut it to 250 char and add an ellipse to the end if so
  // content = content.slice(0, 250) + "...";
  // }
  // console.log(content);
  // now update the actual DOM with the truncated text
  // desc.innerText = content;
  // console.log(desc.innerText);
  // }

  // update the above code to wrap the ellipse in <a> tag
  // selecting each element of the querySelectorAll response
  for (let desc of descriptions.values()) {
    // assigning 'content' to each desc's innerText property
    let content = desc.innerText;
    // log content
    // console.log(content);
    // is it longer than 250 char?
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + '<a href="#">...</a>';
    }
    // console.log(content);
    // now update the actual DOM with the truncated text.
    // since it contains an HTML element, we have to update the innerHTML,
    // not just simply text
    desc.innerHTML = content;
    // console.log(desc.innerText);
  }

  // suppose you want to bold any rating value greater than 4.7...
  // MY SOLUTION
  const ratings = document.querySelectorAll(".rating .value");
  // console.log(ratings.length);
  for (let value of ratings) {
    if (parseFloat(value.innerText) > 4.7) {
      value.innerHTML = `<strong>${value.innerText}</strong>`;
    }
    // console.log(value.innerText);
    // console.log(value.innerHTML);
  }

  // CONTENT SOLUTION (This is probably the better solution because it styles with CSS)
  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    console.log(ratingValue);
    if (ratingValue > 4.7) {
      rating.style.fontWeight = "bold";
      // give it a color too, green
      rating.style.color = "#3ba17c";
    }
  }
  // create a new element
  const parks = document.querySelectorAll(".park");
  const numberParks = parks.length;
  const newElement = document.createElement("div");
  newElement.innerText = `${numberParks} exciting parks to visit`;
  newElement.classList.add("header-statement");
  const header = document.querySelector("header");
  header.appendChild(newElement);

  // remove an element
  // Get the parent element of all parks. this way we dont have to use document
  // this can be useful if we will be editing a lot of things in long tree
  const main = document.querySelector("main");
  // Select a single park. no 'all' so it selects the first one
  const park = main.querySelector(".park");
  // Remove that park
  main.removeChild(park);
};
window.addEventListener("DOMContentLoaded", main);
