
function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  // This will contain icon and text
  const phoneContainer = document.createElement('div');
  phoneContainer.classList.add('phone-container');

  const phoneIcon = document.createElement('i');
  phoneIcon.classList.add("fa-phone");
  phoneIcon.classList.add("fa-solid");

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '1-2000';

  // Appends phoneIcon and phoneNumber;
  phoneContainer.appendChild(phoneIcon);
  phoneContainer.appendChild(phoneNumber);


  const addressContainer = document.createElement('div');
  addressContainer.classList.add("address-container");

  const locationIcon = document.createElement('i');
  locationIcon.classList.add('fa-solid');
  locationIcon.classList.add('fa-location-dot');


  const addressText = document.createElement('p');
  addressText.textContent = 'Bulag St., Brgy. Dimakita, Hanapin City';

  addressContainer.appendChild(locationIcon);
  addressContainer.appendChild(addressText);


  const mapContainer = document.createElement('div');
  mapContainer.classList.add("map-container");

  const map = document.createElement('iframe');
  map.setAttribute('id', 'map');  
  map.src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2140.2110028462257!2d141.93546550687805!3d45.52260570752122!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1670567418805!5m2!1sen!2sph";
  map.width = "600";
  map.height = "450";
  map.allowFullscreen = "";
  map.loading = "lazy";
  map.referrerPolicy = "no-referrer-when-downgrade";

  mapContainer.appendChild(map);

  contact.appendChild(phoneContainer);
  contact.appendChild(addressContainer);
  contact.appendChild(mapContainer);

  return contact;
}


function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}


export default loadContact

