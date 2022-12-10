
function createHome() {
  const home = document.createElement('div');
  home.classList.add("home");

  const baristaGirlImg = document.createElement('img');
  baristaGirlImg.src = "./images/staffs/barista-girl.jpg";
  baristaGirlImg.alt = "Cute Barista Girl";

  home.appendChild(createParagraph("Your One Stop Coffee Shop!"));
  home.appendChild(createParagraph("Made with love since 2020"));
  home.appendChild(baristaGirlImg);
  home.appendChild(createParagraph("Order online or visit us!"));

  return home;
}

// Creates a paragraph for home tab
function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

// This "loadHome" function is exported by default
export default loadHome;







