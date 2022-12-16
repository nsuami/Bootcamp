const submitHandler = (event) => {
  event.preventDefault();

  const form = document.querySelector("#parkForm");
  const formData = new FormData(form);

  // Keep track of if any errors are found
  let hasErrors = false;

  formData.forEach((value, key) => {
    let errorId = `#${key.slice(4).toLowerCase()}Error`;
    if (value.trim() === "") {
      document.querySelector(errorId).style.display = "block";
      hasErrors = true;
    } else {
      document.querySelector(errorId).style.display = "none";
    }
  });

  // REFACTORED
  // if there are no errors
  // if (!hasErrors) {
  //   //create a new element
  //   const parkSection = document.createElement("section");

  //   // add the park class
  //   parkSection.classList.add("park");

  //   // construct the HTML for this element
  //   const content = `
  //   <h2>${formData.get("parkName")}</h2>
  //   <div class="location">${formData.get("parkLocation")}</div>
  //   <div class="description">${formData.get("parkDescription")}</div>
  //   <button class="rateBtn" title="Add to Favourites">&#9734;</button>
  //   <div class="stats">
  //     <div class="established stat">
  //       <h3>Established</h3>
  //       <div class="value">${formData.get("parkEstablished")}</div>
  //     </div>
  //     <div class="area stat">
  //       <h3>Area</h3>
  //       <div class="value">${formData.get("parkArea")}</div>
  //     </div>
  //     <div class="rating stat">
  //       <h3>Rating</h3>
  //       <div class="value">${formData.get("parkRating")}</div>
  //     </div>
  //   </div>
  //   `;

  //   // set the innerHTML
  //   parkSection.innerHTML = content;

  //   //append to the main element
  //   document.querySelector("main").appendChild(parkSection);
  // }

  // here a park object is created with formData.get (gets the input based on name="")
  // for each key. then the park is pushed to parks, and render is called.
  if (!hasErrors) {
    // Create an empty object
    const park = {
      name: formData.get("parkName"),
      location: formData.get("parkLocation"),
      description: formData.get("parkDescription"),
      established: formData.get("parkEstablished"),
      area: formData.get("parkArea"),
      rating: formData.get("parkRating"),
    };

    parks.push(park);

    render();
  }
};

// function to handler favorite button clicks
const favoriteButtonClickHandler = (event) => {
  if (event.target.nodeName == "BUTTON") {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  }
};

// function for sorting by name
const sortByName = (parkA, parkB) => {
  // const parkAName = parkA.querySelector("h2").innerText;
  // const parkBName = parkB.querySelector("h2").innerText;
  // refactor to work will with the render() pattern
  // now parkA and parkB are simply park objects
  const parkAName = parkA.name;
  const parkBName = parkB.name;
  return parkAName < parkBName ? -1 : 1;
};

// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  return parkA.rating > parkB.rating ? -1 : 1;
};

// REFACTORED
// function for handling the nameSorter click
// const nameSorterClickHandler = (event) => {
//   event.preventDefault();

//   // 1.  get the main element
//   const main = document.querySelector("main");

//   // 2. get the list of parks
//   const parksList = main.querySelectorAll(".park");

//   // 3. empty the main
//   main.innerHTML = "";

//   // 4. create an array
//   const parksArray = Array.from(parksList);

//   // 5. sort the array
//   parksArray.sort(sortByName);

//   // 6. Insert each park into the DOM
//   parksArray.forEach((park) => {
//     main.appendChild(park);
//   });
// };

const nameSorterClickHandler = (event) => {
  event.preventDefault();

  parks.sort(sortByName);

  render();
};

// REFACTORED
// function to handle the ratingSorter click
// const ratingSorterClickHandler = (event) => {
//   event.preventDefault();

//   // 1.  get the main element
//   const main = document.querySelector("main");

//   // 2. get the list of parks
//   const parksList = main.querySelectorAll(".park");

//   // 3. empty the main
//   main.innerHTML = "";

//   // 4. create an array
//   const parksArray = Array.from(parksList);

//   // 5. sort the array
//   parksArray.sort(sortByRating);

//   // 6. Insert each park into the DOM
//   parksArray.forEach((park) => {
//     main.appendChild(park);
//   });
// };

// the new function to work with render()
const ratingSorterClickHandler = (event) => {
  event.preventDefault();
  parks.sort(sortByRating);
  render();
};

// this function takes the park object passed into it, destructures the keys into
// vars, and then creates a template literal string with the HTML structure of the
// park that needs to be rendered to the DOM.
const renderOnePark = (park) => {
  // Get the individual properties of the park
  const { name, location, description, established, area, rating } = park;

  const content = `
      <section class="park">
        <h2>${name}</h2>
        <div class="location">${location}</div>
        <div class="description">${description}</div>
        <button class="rateBtn" title="Add to Favourites">&#9734;</button>
        <div class="stats">
          <div class="established stat">
            <h3>Established</h3>
            <div class="value">${established}</div>
          </div>
          <div class="area stat">
            <h3>Area</h3>
            <div class="value">${area}</div>
          </div>
          <div class="rating stat">
            <h3>Rating</h3>
            <div class="value">${rating}</div>
          </div>
        </div>
      </section>
  `;
  return content;
};

// this function is the main rendering function. It will grab main, empty it,
// then make use of the renderOnePark() function. .map() is called on parks,
// for each park, renderOneFunction is called and each park "becomes" that
// returned render. once since map makes a new array, we then need to use
// .join("") to join the elements of the array together into one string.
// THEN FINALLY, we set that content from map.join to main.innerHTML
const render = () => {
  // Get the parent element
  const main = document.querySelector("main");

  // Empty the parent element
  main.innerHTML = "";

  // Get the parks HTML
  const content = parks.map(renderOnePark).join("");

  // Set the `innerHTML` of parent element
  main.innerHTML = content;
};

// the point where all the code starts
const main = () => {
  // select the nameSorter link
  const nameSorter = document.querySelector("#nameSorter");

  // add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // select the ratingSorter link
  const ratingSorter = document.querySelector("#ratingSorter");

  // add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);

  // select all the buttons for all the parks
  const allBtns = document.querySelectorAll(".rateBtn");

  // iterate the list of buttons and add an event handler to each
  // allBtns.forEach((btn) => {
  //   btn.addEventListener("click", favoriteButtonClickHandler);
  // });

  // selects the main element
  const main = document.querySelector("main");

  // add event handler to main
  main.addEventListener("click", favoriteButtonClickHandler);
  // however, now this will try to fire for all clicks anywhere in main.
  // we can prevent this from happening in the favoriteButtonClickHandler function

  // get the form element
  const form = document.querySelector("#parkForm");

  // attach the submit handler
  form.addEventListener("submit", submitHandler);

  // call render
  render();
};

// Add event listener for DOMContentLoaded
window.addEventListener("DOMContentLoaded", main);
