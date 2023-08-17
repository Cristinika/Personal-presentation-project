const form = document.getElementById("form");
const Name = document.getElementById("name");
const Email = document.getElementById("email");
let Gender = null;
const Message = document.getElementById("message");
const confirmationBanner = document.getElementById('confirmationBanner');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function emailValidation(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function genderValidation() {
    const radioButtons = document.getElementsByName("gender");
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            return true;
        }
    }
    return false;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (Name.value === "") {
        showError(Name, "Name is required");
    } else {
        showSuccess(Name);
    }

    if (Email.value === "") {
        showError(Email, "Email is required");
    } else if (!emailValidation(Email.value)) {
        showError(Email, "Email is not valid");
    } else {
        showSuccess(Email);
    }

    if (!genderValidation()) {
        showError(document.querySelector(".radio-group"), "Gender is required");
    } else {
        showSuccess(document.querySelector(".radio-group"));
        const radioButtons = document.getElementsByName("gender");
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                Gender = radioButton.value;
                break;
            }
        }
    }

    if (Message.value === "") {
        showError(Message, "Message is required");
    } else {
        showSuccess(Message);
    }

    // Afisarea banner-ului de confirmare
    confirmationBanner.innerText = "Thank you for contacting us! We will get back to you as soon as possible.";
    confirmationBanner.style.display = "block";

    // Inchidem banner-ul după 3 secunde
    setTimeout(function() {
        confirmationBanner.style.display = "none";
    }, 3000);
});
