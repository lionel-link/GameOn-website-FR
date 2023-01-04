function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeButton = document.querySelector(".close");
const form = document.getElementById("form")
const formData = document.getElementById("formData")
const MessageSuccess = document.getElementById("message-success")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
closeButton.addEventListener("click", closeModal)


function closeModal() {
  modalbg.style.display = "none";
}

// fonction submit
form.addEventListener('submit', (e) => {
    // const form = e.target; // meilleur façon de faire, recuperer le form le plus tot, et le passer a validateData, plutot que de passer e

  e.preventDefault();
  if (validateData(form)) {

  } else {
    
  }
  closeModal();
  MessageSuccess.style.display="block"
  setInterval(()=>{MessageSuccess.style.display="none"}, 4000)

})

function toggleInputError(message, elementId, visibility) {
  const element = document.getElementById(elementId);
  element.innerHTML = "<p class='text-label'>" + message + "</p>";
  element.style.display = visibility ? "none" : "block";
}

function validateData(form) {
  var form_data = new FormData(form);

  const hasLocation = form_data.has("location");

  // toggleInputError("Veuillez selectionner votre ville", 'chk_option_location_error', form_data.has("location"));

  if (form_data.has("location")) {
    document.getElementById("chk_option_location_error").style.display = "none";
  }else {
    document.getElementById("chk_option_location_error").style.display = "block";
  }

  if (!form_data.has("termofuse")) {
    document.getElementById("chk_option_termofuse_error").style.display = "block";
  }else {
    document.getElementById("chk_option_termofuse_error").style.display = "none";
  }

  console.log(form_data.get("birthdate"))

  // const firstNameTooShort = form_data.get("first").length <= 1;
  // const firstNameTooLong = form_data.get("first").length > 50;

  // toggleInputError("Votre nom est trop court, il doit faire plus de 2 characteres", 'chk_option_first_error', firstNameTooShort);
  // toggleInputError("Votre nom est trop long, il doit pas faire plus de 50 characteres", 'chk_option_first_error', firstNameTooLong); // example, non demandée dans le projet

  if (form_data.get("first").length <= 1) {
    document.getElementById("chk_option_first_error").style.display = "block";
  }
  else {
    document.getElementById("chk_option_first_error").style.display = "none";
  }

  if (form_data.get("last").length <= 1) {
    document.getElementById("chk_option_last_error").style.display = "block";
  }
  else {
    document.getElementById("chk_option_last_error").style.display = "none";
  }

  if (!validateEmail(form_data.get("email"))) {
    document.getElementById("chk_option_email_error").style.display = "block";
  }
  else {
    document.getElementById("chk_option_email_error").style.display = "none";
  }

  if (!form_data.get("birthdate")) {
    document.getElementById("chk_option_birthdate_error").style.display = "block";
  }
  else {
    document.getElementById("chk_option_birthdate_error").style.display = "none";
  }
  if (!form_data.get("quantity")) {
    document.getElementById("chk_option_quantity_error").style.display = "block";
  }
  else {
    document.getElementById("chk_option_quantity_error").style.display = "none";
  }

  if (hasLocation && hasName /*&& hasFirstName...*/) {
    return true;
  } else {
    return false;
  }
}




function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}