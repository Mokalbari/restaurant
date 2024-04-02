import dom from "./dom";
import { divContent } from "./dom";

export const appendMenuPage = () => {
  const flexContainer = dom.div;
  flexContainer.classList.add("flex-container");
  divContent.appendChild(flexContainer);

  const title = dom.h2;
  title.textContent = "This month at Tannins!";
  flexContainer.appendChild(title);

  const cardContainer1 = dom.div;
  cardContainer1.classList.add("card-container");
  flexContainer.appendChild(cardContainer1);

  const imgDiv1 = dom.div;
  imgDiv1.classList.add("img");
  imgDiv1.setAttribute("id", "scallops");
  cardContainer1.appendChild(imgDiv1);

  const textDiv1 = dom.div;
  textDiv1.classList.add("text-container");
  cardContainer1.appendChild(textDiv1);

  const subTitle1 = dom.h3;
  subTitle1.textContent = "Seared Scallops with Citrus Herb Butter";
  textDiv1.appendChild(subTitle1);

  const text1 = dom.p;
  text1.textContent = `Succulent scallops, perfectly seared to golden perfection and
  dressed with a zesty citrus herb butter sauce. Accompanied by a
  refreshing citrus salad garnished with microgreens.`;
  textDiv1.appendChild(text1);

  const price1 = dom.p;
  price1.textContent = "65€";
  textDiv1.appendChild(price1);
  //
  const cardContainer2 = dom.div;
  cardContainer2.classList.add("card-container");
  flexContainer.appendChild(cardContainer2);

  const imgDiv2 = dom.div;
  imgDiv2.classList.add("img");
  imgDiv2.setAttribute("id", "scallops");
  cardContainer2.appendChild(imgDiv2);

  const textDiv2 = dom.div;
  textDiv2.classList.add("text-container");
  cardContainer2.appendChild(textDiv2);

  const subTitle2 = dom.h3;
  subTitle2.textContent = "Herb-Crusted Rack of Lamb with Rosemary Jus";
  textDiv2.appendChild(subTitle2);

  const text2 = dom.p;
  text2.textContent = `Tender rack of lamb coated in a fragrant herb crust, roasted to
  perfection and served with a rich rosemary jus. Accompanied by roasted
  baby potatoes and seasonal vegetables.
`;
  textDiv2.appendChild(text2);

  const price2 = dom.p;
  price2.textContent = "70€";
  textDiv2.appendChild(price2);
  //
  //
  const cardContainer3 = dom.div;
  cardContainer3.classList.add("card-container");
  flexContainer.appendChild(cardContainer3);

  const imgDiv3 = dom.div;
  imgDiv3.classList.add("img");
  imgDiv3.setAttribute("id", "scallops");
  cardContainer3.appendChild(imgDiv3);

  const textDiv3 = dom.div;
  textDiv3.classList.add("text-container");
  cardContainer3.appendChild(textDiv3);

  const subTitle3 = dom.h3;
  subTitle3.textContent = "Truffle Risotto with Wild Mushrooms";
  textDiv3.appendChild(subTitle3);

  const text3 = dom.p;
  text3.textContent = `Creamy Arborio rice cooked to perfection with earthy truffle oil, topped
  with a medley of sautéed wild mushrooms and finished with a sprinkle of
  Parmesan cheese.`;
  textDiv3.appendChild(text3);

  const price3 = dom.p;
  price3.textContent = "60€";
  textDiv3.appendChild(price3);
};
