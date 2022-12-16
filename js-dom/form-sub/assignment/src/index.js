import "./index.css";

/*
 Your solution here
 */
// 2
const submitHandler = (event) => {
  event.preventDefault();
  const form = document.querySelector("#searchForm");
  const formData = new FormData(event.target);
  //   console.log("here");
  //   console.log(event.target.nodeName);
  const errorExists = validateForm(formData);
  if (errorExists) {
    form.removeChild(form.lastChild);
    errorExists.style.display = "block";
    form.appendChild(errorExists);
  } else {
    // search
    // const search = document.querySelector("input");
    // search.get("searchTerm").toLowerCase();
    const search = formData.get("searchTerm").toLowerCase();
    // console.log(search);
    // console.log(document.querySelector("input").nodeName);
    const headings = document.querySelectorAll("h2");
    // style.display = "none";

    for (let element of headings) {
      const lowerCaseH2 = element.innerText.toLowerCase();
      const parentNode = element.closest("article");
      parentNode.classList.remove("hidden");
      if (!lowerCaseH2.includes(search)) {
        parentNode.classList.add("hidden");
      }
    }
  }
};

// 4
const validateExists = (value) => {
  return Boolean(value && value.trim());
};

// 3
const validateForm = (formData) => {
  if (!validateExists(formData.get("searchTerm"))) {
    const error = document.createElement("div");
    error.id = "searchError";
    error.classList.add("error");
    error.innerText = `Please enter a search term`;
    // console.log(error.classList);
    // console.log(error.id);
    // console.log(error.innerText);

    return error;
  }
  return false;
};

// 1
const main = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main());
