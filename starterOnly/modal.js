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


// Close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// fonction submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  handleData(e);
  closeModal();
  MessageSuccess.style.display="block"
  setInterval(()=>{MessageSuccess.style.display="none"}, 4000)

})

function handleData(e) {
  var form_data = new FormData(document.getElementById("form"));
  if (!form_data.has("location")) {
    document.getElementById("chk_option_location_error").style.display = "block";
  }else {
    document.getElementById("chk_option_location_error").style.display = "none";
  }

  if (!form_data.has("termofuse")) {
    document.getElementById("chk_option_termofuse_error").style.display = "block";
  }else {
    document.getElementById("chk_option_termofuse_error").style.display = "none";
  }

  console.log(form_data.get("birthdate"))

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

  return false;
}




function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}