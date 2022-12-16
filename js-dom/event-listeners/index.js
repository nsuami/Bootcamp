const main = () => {
  //EVENT LISTENERS
  // .addEventListener()
  const firstBtn = document.querySelector("button");
  // event listener
  firstBtn.addEventListener("click", (event) => {
    // event handling
    console.log("You clicked the button", event); //> information about event
    console.log(event.target); //> the node being targeted
  });
  // select all buttons
  const allBtns = document.querySelectorAll(".rateBtn");
  // iterate through the list of buttons and add an event listener for each of them
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      // event = information about the event, target = the node/HTML element,
      // parentNode = the parent element which is also a node, called the parent node
      console.log(event.target.parentNode); //> the section element
    });
  });

  // select the sort by name link
  // add an event listener for the element
  const nameSorter = document.querySelector("#nameSorter");
  nameSorter.addEventListener("click", (event) => {
    sortEventHandler(event, "name");
  });

  const ratingSorter = document.querySelector("#ratingSorter");
  ratingSorter.addEventListener("click", (event) => {
    sortEventHandler(event, "rating");
  });

  const sortEventHandler = (event, type) => {
    event.preventDefault();
    const main = document.querySelector("main");
    const parksList = main.querySelectorAll(".park");
    main.innerHTML = "";
    const parksArray = Array.from(parksList);
    if (type == "name") sortByName(parksArray);
    if (type == "rating") sortByRating(parksArray);
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };

  const sortByName = (parksArray) => {
    parksArray.sort((parkA, parkB) => {
      parkAName = parkA.querySelector("h2").innerText;
      parkBName = parkB.querySelector("h2").innerText;
      return parkAName < parkBName ? -1 : 1;
    });
  };

  const sortByRating = (parksArray) => {
    parksArray.sort((parkA, parkB) => {
      parkARating = parseFloat(parkA.querySelector(".rating .value").innerText);
      parkBRating = parseFloat(parkB.querySelector(".rating .value").innerText);
      return parkARating < parkBRating ? 1 : -1;
    });
  };

  // const nameSortHandler = (event) => {
  //   event.preventDefault();
  //   // log that the event occurred
  //   console.log("You clicked the name sorter");

  //   // to actually sort by name...
  //   // get main parent
  //   const main = document.querySelector("main");
  //   // get all the park nodes
  //   const parksList = main.querySelectorAll(".park");
  //   // empty main parent
  //   main.innerHTML = "";
  //   // make array of parks
  //   const parksArray = Array.from(parksList);
  //   // sort the array by name

  //   sortByName(parksArray);
  //   //
  //   parksArray.forEach((park) => {
  //     main.appendChild(park);
  //   });
  // };
};
window.addEventListener("DOMContentLoaded", main);
