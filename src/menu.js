function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Black",
      "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Cappuccino",
      "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Cortado",
      "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Espresso",
      "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos."
    )
  );
  menu.appendChild(
    createMenuItem(
      "Latte",
      "The latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice. "
    )
  );
  menu.appendChild(
    createMenuItem(
      "Macchiato",
      "The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio."
    )
  );

  return menu;
}


function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.classList.add("menu-item");

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const foodDescription = document.createElement('p');
  foodDescription.textContent = description;

  const foodImage = document.createElement('img');
  foodImage.src = `./images/coffee-menu/${name.toLowerCase()}.png`;   // ! Always remember a file format ".png"
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}


function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}


// This "loadHome" function is exported by default
export default loadMenu;




