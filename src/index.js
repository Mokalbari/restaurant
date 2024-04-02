import reset from "./css/reset.css";
import variables from "./css/variables.scss";
import headerFooter from "./css/header-footer.scss";
import global from "./css/global.scss";
import homepagescss from "./css/homepage.scss";
import menuscss from "./css/menu.scss";
import { divContent, navigationMenu } from "./js/dom";
import { appendMenuPage } from "./js/menu";
import { appendHomePage } from "./js/homepage";

document.addEventListener("DOMContentLoaded", () => {
  appendHomePage();
});

document.addEventListener("click", (event) => {
  if (event.target.id === "menu") {
    divContent.innerHTML = "";
    appendMenuPage();
  } else if (event.target.id === "home") {
    divContent.innerHTML = "";
    appendHomePage();
  } else if (event.target.id === "menu-btn") {
    divContent.innerHTML = "";
    appendMenuPage();
  }
});
