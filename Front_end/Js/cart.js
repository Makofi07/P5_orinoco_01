//let listsProduit = JSON.parse(localStorage.getItem("data"));

// Formulaire
const form = document.querySelector(".containerForm_form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const adress = document.getElementById("adress");
const zipCode = document.getElementById("zipCode");
const city = document.getElementById("city");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //recupère les value de l'input
  // cette fonction trim() ote les espaces
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const adressValue = adress.value.trim();
  const zipCodeValue = zipCode.value.trim();
  const cityValue = city.value.trim();

  //Nom
  if (lastNameValue === "") {
    // montrer erreur
    //ajouter la classe error
    setErrorFor(lastName, " Veuillez remplir le champ ");
  }
  //ajouter la classe success
  else setSuccessFor(firstName);

  //Prénom
  if (firstNameValue === "") {
    // montrer erreur
    //ajouter la classe error
    setErrorFor(firstName, " Veuillez remplir le champ ");
  }
  //ajouter la classe success
  else setSuccessFor(firstName);

  //Mail
  if (emailValue === "") {
    setErrorFor(email, "Veuillez rempli le champ");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Votre adresse mail n'est pas valable");
  } else {
    setSuccessFor(email);
  }

  //Adresse
  if (adressValue === "") {
    setErrorFor(adress, "Veuillez rempli le champ");
  } else if (!isAdress(adressValue)) {
    setErrorFor(adress, "Votre adresse n'est pas valable");
  } else {
    setSuccessFor(adress);
  }
  //Code Postal
  if (zipCodeValue === "") {
    setErrorFor(zipCode, "Veuillez rempli le champ");
  } else if (!isZipCode(zipCodeValue)) {
    setErrorFor(zipCode, "Votre code postale n'est pas valable");
  } else {
    setSuccessFor(zipCode);
  }
  //City
  if (cityValue === "") {
    setErrorFor(city, "Veuillez rempli le champ");
  } else if (!isCity(cityValue)) {
    setErrorFor(city, "Votre  n'est pas valable");
  } else {
    setSuccessFor(city);
  }

  function setErrorFor(input, message) {
    const containerForm_formControl = input.parentElement;
    const small = containerForm_formControl.querySelector("small");

    //ajouter le message d'erreur dans la balise small
    small.innerText = message;

    containerForm_formControl.className = " containerForm_formControl error ";
  }
  function setSuccessFor(input) {
    const containerForm_formControl = input.parentElement;

    containerForm_formControl.className = " containerForm_formControl success ";
  }

  function isEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  }

  function isAdress(adressValue) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(adressValue);
  }

  function isZipCode(zipCodeValue) {
    return /^(?:[0-8]\d|9[0-8])\d{3}$/.test(zipCodeValue);
  }
}
