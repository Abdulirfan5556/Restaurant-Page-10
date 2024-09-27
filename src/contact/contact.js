import "./contact.css";

const divCreate = (h2Content, pContent) => {
  const div = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = h2Content;

  const p = document.createElement("p");
  p.innerHTML = pContent;

  div.classList.add("card");

  div.appendChild(h2);
  div.appendChild(p);

  return div;
};

const contactComponent = () => {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("contact-container");

  const h2 = document.createElement("h2");
  h2.textContent = "Contact Us";
  h2.classList.add("contact-h2");
  containerDiv.appendChild(h2);

  const div = document.createElement("div");
  containerDiv.appendChild(div);

  const phoneDiv = divCreate("PHONE", "12345-67890");
  div.appendChild(phoneDiv);

  const emailDiv = divCreate("EMAIL", "Irfan@restaurant.com");
  div.appendChild(emailDiv);

  const locationDiv = divCreate("LOCATION", "Shencottai,<br>Shencottai,<br>SHENCOTTAI");
  locationDiv.classList.add("location");
  div.appendChild(locationDiv);

  return containerDiv;
};

export { contactComponent };
