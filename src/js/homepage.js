import dom from "./dom";
import { divContent } from "./dom";

const appendHomePage = () => {
  const flexContainer = dom.div;
  flexContainer.classList.add("home", "flex-container");
  divContent.appendChild(flexContainer);

  const leftContainer = dom.div;
  leftContainer.classList.add("left-container");
  flexContainer.appendChild(leftContainer);

  const heading = dom.h1;
  heading.textContent = "Tannins!";
  leftContainer.appendChild(heading);

  const heroContent = dom.p;
  heroContent.textContent = `At Tannins, we redefine the art of dining, merging the
  sophistication of high-end cuisine with the delicate nuances of
  wine and tea pairings. Embark on a culinary journey where every
  dish is meticulously crafted to tantalize your taste buds and
  elevate your dining experience to new heights.
`;
  leftContainer.appendChild(heroContent);

  const button = dom.button;
  button.textContent = "See menu";
  leftContainer.appendChild(button);

  const rightContainer = dom.div;
  rightContainer.classList.add("right-container");
  flexContainer.appendChild(rightContainer);
};

// export default appendHomePage();
