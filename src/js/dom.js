export const getDomElement = {
  get div() {
    return document.createElement("div");
  },

  get h1() {
    return document.createElement("h1");
  },

  get h2() {
    return document.createElement("h2");
  },

  get h3() {
    return document.createElement("h3");
  },

  get p() {
    return document.createElement("p");
  },

  get button() {
    return document.createElement("button");
  },
};

export default getDomElement;
export const divContent = document.querySelector("#content");
export const navigationMenu = document.querySelector("#navigation-menu");
