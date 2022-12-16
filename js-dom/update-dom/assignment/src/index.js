import "./styles.css";

/**
  Write the addheadings() function here
*/
const addHeadings = () => {
  const articles = document.querySelectorAll("article");
  for (let selected of articles) {
    const newElement = document.createElement("h2");
    const temp = selected.innerText;
    selected.innerText = "";
    newElement.innerText = temp;
    selected.appendChild(newElement);
  }
};

/**
  Write the styleTutorialsAndArticles() function here
*/
const styleTutorialsAndArticles = () => {
  // need .includes
  const articles = document.querySelectorAll("article");
  for (let selected of articles) {
    // console.log(selected);
    if (selected.innerText.includes("Tutorial")) {
      selected.classList.add("tutorial");
    }
    if (selected.innerText.includes("Article")) {
      selected.classList.add("article");
    }
  }
};
/**
  Write the separateAllTutorials() function here
*/
const separateAllTutorials = () => {
  const tutorials = document.querySelectorAll(".tutorial");
  const newSection = document.createElement("section");
  for (let selected of tutorials) {
    // appendChild removes from the original parent and places child in new location
    newSection.appendChild(selected);
  }
  // console.log(newSection);
  newSection.classList.add("tutorials");
  const body = document.querySelector("body");
  body.appendChild(newSection);
};
/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
