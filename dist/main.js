/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction createContact() {\r\n  const contact = document.createElement('div');\r\n  contact.classList.add('contact');\r\n\r\n  // This will contain icon and text\r\n  const phoneContainer = document.createElement('div');\r\n  phoneContainer.classList.add('phone-container');\r\n\r\n  const phoneIcon = document.createElement('i');\r\n  phoneIcon.classList.add(\"fa-phone\");\r\n  phoneIcon.classList.add(\"fa-solid\");\r\n\r\n  const phoneNumber = document.createElement('p');\r\n  phoneNumber.textContent = '1-2000';\r\n\r\n  // Appends phoneIcon and phoneNumber;\r\n  phoneContainer.appendChild(phoneIcon);\r\n  phoneContainer.appendChild(phoneNumber);\r\n\r\n\r\n  const addressContainer = document.createElement('div');\r\n  addressContainer.classList.add(\"address-container\");\r\n\r\n  const locationIcon = document.createElement('i');\r\n  locationIcon.classList.add('fa-solid');\r\n  locationIcon.classList.add('fa-location-dot');\r\n\r\n\r\n  const addressText = document.createElement('p');\r\n  addressText.textContent = 'Bulag St., Brgy. Dimakita, Hanapin City';\r\n\r\n  addressContainer.appendChild(locationIcon);\r\n  addressContainer.appendChild(addressText);\r\n\r\n\r\n  const mapContainer = document.createElement('div');\r\n  mapContainer.classList.add(\"map-container\");\r\n\r\n  const map = document.createElement('iframe');\r\n  map.setAttribute('id', 'map');  \r\n  map.src = \"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2140.2110028462257!2d141.93546550687805!3d45.52260570752122!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1670567418805!5m2!1sen!2sph\";\r\n  map.width = \"600\";\r\n  map.height = \"450\";\r\n  map.allowFullscreen = \"\";\r\n  map.loading = \"lazy\";\r\n  map.referrerPolicy = \"no-referrer-when-downgrade\";\r\n\r\n  mapContainer.appendChild(map);\r\n\r\n  contact.appendChild(phoneContainer);\r\n  contact.appendChild(addressContainer);\r\n  contact.appendChild(mapContainer);\r\n\r\n  return contact;\r\n}\r\n\r\n\r\nfunction loadContact() {\r\n  const main = document.getElementById('main');\r\n  main.textContent = '';\r\n  main.appendChild(createContact());\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction createHome() {\r\n  const home = document.createElement('div');\r\n  home.classList.add(\"home\");\r\n\r\n  const baristaGirlImg = document.createElement('img');\r\n  baristaGirlImg.src = \"./images/staffs/barista-girl.jpg\";\r\n  baristaGirlImg.alt = \"Cute Barista Girl\";\r\n\r\n  home.appendChild(createParagraph(\"Your One Stop Coffee Shop!\"));\r\n  home.appendChild(createParagraph(\"Made with love since 2020\"));\r\n  home.appendChild(baristaGirlImg);\r\n  home.appendChild(createParagraph(\"Order online or visit us!\"));\r\n\r\n  return home;\r\n}\r\n\r\n// Creates a paragraph for home tab\r\nfunction createParagraph(text) {\r\n  const paragraph = document.createElement('p');\r\n  paragraph.textContent = text;\r\n  return paragraph;\r\n}\r\n\r\nfunction loadHome() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createHome());\r\n}\r\n\r\n// This \"loadHome\" function is exported by default\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n  const menu = document.createElement('div');\r\n  menu.classList.add(\"menu\");\r\n\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Black\",\r\n      \"Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm.\"\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Cappuccino\",\r\n      \"Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.\"\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Cortado\",\r\n      \"Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.\"\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Espresso\",\r\n      \"An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.\"\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Latte\",\r\n      \"The latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice. \"\r\n    )\r\n  );\r\n  menu.appendChild(\r\n    createMenuItem(\r\n      \"Macchiato\",\r\n      \"The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.\"\r\n    )\r\n  );\r\n\r\n  return menu;\r\n}\r\n\r\n\r\nfunction createMenuItem(name, description) {\r\n  const menuItem = document.createElement('div');\r\n  menuItem.classList.add(\"menu-item\");\r\n\r\n  const foodName = document.createElement('h2');\r\n  foodName.textContent = name;\r\n\r\n  const foodDescription = document.createElement('p');\r\n  foodDescription.textContent = description;\r\n\r\n  const foodImage = document.createElement('img');\r\n  foodImage.src = `./images/coffee-menu/${name.toLowerCase()}.png`;   // ! Always remember a file format \".png\"\r\n  foodImage.alt = `${name}`;\r\n\r\n  menuItem.appendChild(foodImage);\r\n  menuItem.appendChild(foodName);\r\n  menuItem.appendChild(foodDescription);\r\n\r\n  return menuItem;\r\n}\r\n\r\n\r\nfunction loadMenu() {\r\n  const main = document.getElementById(\"main\");\r\n  main.textContent = \"\";\r\n  main.appendChild(createMenu());\r\n}\r\n\r\n\r\n// This \"loadHome\" function is exported by default\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nfunction createHeader() {\r\n  const header = document.createElement('header');\r\n  header.classList.add(\"header\");\r\n\r\n  const cafeLogo = document.createElement('img');\r\n  cafeLogo.classList.add(\"cafe-logo\"); //! please add restaurant logo on css\r\n  cafeLogo.src = \"./images/logo/kape-ni-ale-logo.png\";\r\n  cafeLogo.alt = \"Kape ni Ale Logo\"\r\n\r\n\r\n  header.appendChild(cafeLogo);\r\n  header.appendChild(createNav());\r\n\r\n  return header;\r\n}\r\n\r\nfunction createNav() {\r\n  const nav = document.createElement('nav');\r\n\r\n  const homeButton = document.createElement('button');\r\n  homeButton.classList.add('button-nav');\r\n  homeButton.textContent = \"Home\";\r\n  homeButton.addEventListener(\"click\", (e) => {\r\n    if(e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(homeButton);\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\n  const menuButton = document.createElement('button');\r\n  menuButton.classList.add('button-nav');\r\n  menuButton.textContent = \"Menu\";\r\n  menuButton.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(menuButton);\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  const contactButton = document.createElement('button');\r\n  contactButton.classList.add('button-nav');\r\n  contactButton.textContent = \"Contact\";\r\n  contactButton.addEventListener('click', (e) => {\r\n    if (e.target.classList.contains(\"active\")) return;\r\n    setActiveButton(contactButton);\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n\r\n  nav.appendChild(homeButton);\r\n  nav.appendChild(menuButton);\r\n  nav.appendChild(contactButton);\r\n\r\n  return nav;\r\n}\r\n\r\nfunction setActiveButton(button) {\r\n  const buttons = document.querySelectorAll(\".button-nav\");\r\n\r\n  buttons.forEach((button) => {\r\n    if (button !== this) {\r\n      button.classList.remove(\"active\");\r\n    }\r\n  });\r\n\r\n  button.classList.add(\"active\");\r\n}\r\n\r\n\r\nfunction createMain() {\r\n  const main = document.createElement(\"main\");\r\n  main.classList.add(\"main\");\r\n  main.setAttribute(\"id\", \"main\");\r\n  return main;\r\n}\r\n\r\nfunction createFooter() {\r\n  const footer = document.createElement('footer');\r\n  footer.classList.add(\"footer\");\r\n\r\n  const copyright = document.createElement('p');\r\n  copyright.textContent = `Made with 💗 Kenneth`;\r\n\r\n  const githubLink = document.createElement('a');\r\n  githubLink.href = \"https://github.com/ken2213\";\r\n\r\n  const githubIcon = document.createElement('i');\r\n  githubIcon.classList.add(\"fab\");\r\n  githubIcon.classList.add(\"fa-github\");\r\n\r\n  githubLink.appendChild(githubIcon);\r\n  footer.appendChild(copyright);\r\n  footer.appendChild(githubLink);\r\n\r\n  return footer;\r\n}\r\n\r\nfunction initializeWebsite() {\r\n  const content = document.getElementById(\"content\");\r\n\r\n  content.appendChild(createHeader());\r\n  content.appendChild(createMain());\r\n  content.appendChild(createFooter());\r\n\r\n  setActiveButton(document.querySelector(\".button-nav\"));\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;