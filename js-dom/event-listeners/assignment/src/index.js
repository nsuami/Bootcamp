import "./styles.css";

/*
Add event listeners to the .expand_button buttons
*/
function expandArticleBody() {
  const allBtns = document.querySelectorAll(".expand_button");
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      // get parentNode ? event.target.parentNode
      // console.log("Listener works");
      event.preventDefault();
      // the parent article
      const parentArticle = btn.closest("article");
      // console.log(parentArticle.nodeName);
      // console.log(event.target.innerText);

      if (event.target.innerText == "V") {
        parentArticle.querySelector(".article_body").style.display = "none";
        event.target.innerText = ">";
      } else {
        parentArticle.querySelector(".article_body").style.display = "block";
        event.target.innerText = "V";
      }

      // parentNode.querySelector(".article_body").style.display;
    });
  });
}

/*
Add event listeners to the .highlightBtn buttons
*/
function highlightArticle() {
  const allBtns = document.querySelectorAll(".highlightBtn");
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const parentArticle = btn.closest("article");
      if (event.target.innerText == "+") {
        parentArticle.querySelector(".article_body").classList.add("highlight");
        event.target.innerText = "-";
      } else {
        parentArticle
          .querySelector(".article_body")
          .classList.remove("highlight");
        event.target.innerText = "+";
      }
    });
  });
}

function main() {
  expandArticleBody();
  highlightArticle();
}

main();
