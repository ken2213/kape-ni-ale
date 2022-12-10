// <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2140.2110028462257!2d141.93546550687805!3d45.52260570752122!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1670567418805!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '8-7000';

  const address = document.createElement('p');
  address.textContent = 'Bulag St., Brgy. Dimakita, Hanapin City';

  const map = document.createElement('iframe');
  map.setAttribute('id', 'map');  
  map.src = "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2140.2110028462257!2d141.93546550687805!3d45.52260570752122!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1670567418805!5m2!1sen!2sph";
  map.width = "600";
  map.height = "450";
  map.allowFullscreen = "";
  map.loading = "lazy";
  map.referrerPolicy = "no-referrer-when-downgrade";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);
  contact.appendChild(map);

  return contact;
}


function loadContact() {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createContact());
}


export default loadContact

