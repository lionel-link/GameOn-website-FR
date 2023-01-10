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
const firstname = document.getElementById("first")
const lastname = document.getElementById("last")
const email = document.getElementById("email")
const birthdate = document.getElementById("birthdate")
const quantity = document.getElementById("quantity")
const tournoi = document.getElementById("location-error")
const termOfUse = document.getElementById("termOfUse")


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
closeButton.addEventListener("click", closeModal)


// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// fonction submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (handleData(e)) {
    closeModal()
    MessageSuccess.style.display = "block"
    setInterval(() => { MessageSuccess.style.display = "none" }, 4000)
  }
})

function handleData(e) {
  
  var form_data = new FormData(e.target);
  var firstCheck = true
  var lastCheck = true
  var emailCheck = true
  var birthdateCheck = true
  var quantityCheck = true
  var tournoiCheck = true
  var termOfUseCheck = true

  if (form_data.get("first").length < 2) {
    showError(firstname, "firstname", "Veuillez entrer plus de 2 lettres")
    firstCheck = false
  } else { hideError("firstname"); firstCheck = true}

  if (form_data.get("last").length < 2) {
    showError(lastname, "lastname", "Veuillez entrer plus de 2 lettres")
    lastCheck = false
  } else { hideError("lastname"); lastCheck = true }

  if (!validateEmail(form_data.get("email"))) {
    showError(email, "email", "Veuillez entrer un email valide")
    emailCheck = false
  } else { hideError("email"); emailCheck = true }

  if (!form_data.get("birthdate")) {
    showError(birthdate, "birthdate", "Veuillez entrer votre date de naissance")
    birthdateCheck = false
  } else { hideError("birthdate"); birthdateCheck = true }

  if (!form_data.get("quantity")) {
    showError(quantity, "quantity", "Veuillez entrer votre nombre de participation")
    quantityCheck = false
  } else { hideError("quantity"); quantityCheck = true }

  if (!form_data.has("location")) {
    showError(tournoi, "location", "Veuillez choisir une ville")
    firstCheck = false
  } else { hideError("location"); tournoiCheck = true }

  if (!form_data.has("termofuse")) {
    showError(termOfUse, "termOfUse", "Veuillez accepter les conditions d'utilisation.")
    termOfUseCheck = false
  } else { hideError("termOfUse"); termOfUseCheck = true }

  if (firstCheck & lastCheck & emailCheck & birthdateCheck & quantityCheck & tournoiCheck & termOfUseCheck) {
    return true;
  }
  
  return false;
}


function validateEmail(email) {
  var re = /\w+@\w+\.\w+/;
  return re.test(email);
}



function showError(element, errorBlock, errorMessage) {
  if (document.getElementsByClassName(errorBlock).length == 0) {
    let newDiv = document.createElement("div");
    newDiv.className = errorBlock;
    newDiv.innerHTML += '<p class="text-label">' + errorMessage + '</p>'
    element.after(newDiv)
  }
}

function hideError(errorBlock) {
  error = []
  error = document.getElementsByClassName(errorBlock)
  if (error.length >= 1) {
    error[0].remove()
  }
}