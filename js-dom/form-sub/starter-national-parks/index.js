const submitHandler = (event) => {
  event.preventDefault();
  // console.log("Submit listener working");
  // now get the data that the user entered on the form with value property
  // const parkName = document.querySelector(`#name`).value;
  // console.log(parkName);
  // or we can use the FormData object, which is natively provided
  const formData = new FormData(event.target);
  // the keys in the form data correspond to the name attributes in the form's
  // input elements
  const name = formData.get("name"); //> gets the data with the name "name"
  // call main validation with the argument of the form data
  const errors = validateForm(formData);
  // clear all previous errors
  const errorElements = document.querySelectorAll(`.error`);
  for (let element of errorElements) {
    element.style.display = "none";
  }
  // display any new errors
  Object.keys(errors).forEach((key) => {
    const errorElement = document.querySelector(`#park_${key} .error`);
    errorElement.innerHTML = errors[key];
    errorElement.style.display = "block";
  });

  if (!Object.keys(errors).length) {
    //create a new element
    const parkSection = document.createElement("section");
    // add the park class
    parkSection.classList.add("park");

    // construct the HTML for this element
    const content = `
    <h2>${formData.get("name")}</h2>
    <div class="location">${formData.get("location")}</div>
    <div class="description">${formData.get("description")}</div>
    <button class="rateBtn" title="Add to Favourites">&#9734;</button>
    <div class="stats">
      <div class="established stat">
        <h3>Established</h3>
        <div class="value">${moment(formData.get("established")).format(
          "MMMM D, YYYY"
        )}</div>
      </div>
      <div class="area stat">
        <h3>Area</h3>
        <div class="value">${formData.get("area")}</div>
      </div>
      <div class="rating stat">
        <h3>Rating</h3>
        <div class="value">${formData.get("rating")}</div>
      </div>
    </div>
    `;

    // set the innerHTML
    parkSection.innerHTML = content;

    //append to the main element
    document.querySelector("main").appendChild(parkSection);
  }
};

const validateExists = (value) => {
  return Boolean(value && value.trim());
};

const validateForm = (formData) => {
  const errors = {};
  // validate each field of the form by getting their name attribute from the formData object
  // that was argued into this function after it was declared with new FormData from
  // event.target
  if (!validateExists(formData.get("name"))) {
    errors.name = "Please enter a name";
  }

  if (!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating";
  }

  if (!validateExists(formData.get("description"))) {
    errors.description = "Please enter short description";
  }

  if (!validateExists(formData.get("established"))) {
    errors.established = "Please enter date";
  }

  if (!validateExists(formData.get("area"))) {
    errors.area = "Please enter the area";
  }

  if (!validateExists(formData.get("location"))) {
    errors.location = "Please enter the location of the park";
  }

  return errors;
};

const main = () => {
  // query the dom and get the form node
  const form = document.querySelector("#parkForm");
  // add an event listener to the form, call submit handler
  form.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main);
