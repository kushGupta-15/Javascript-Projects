var nameError = document.getElementById("name-error")
var phoneError = document.getElementById("phone-error")
var emailError = document.getElementById("email-error")
var messageError = document.getElementById("message-error")
var submitError = document.getElementById("submit-error")

function validateName() {
    var name = document.getElementById("contact-name").value;
    if(name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    } 
    if(!name.match(/^[a-zA-Z]+$/)) {
        nameError.innerHTML = "Name should contain only alphabets";
        return false;
    }
    nameError.innerHTML = "✅";
    return true;
}
function validatePhone() {
    var phone = document.getElementById("contact-phone").value;
    if(phone.length == 0) {
        phoneError.innerHTML = "Phone no. is required";
        return false;
    } 
    if(phone.length !== 10) {
        phoneError.innerHTML = "Phone no. should be 10 digits";
        return false;
    }

    if(!phone.match(/^[0-9]+$/)) {
        phoneError.innerHTML = "Phone no. should contain only numbers";
        return false;
    }
    phoneError.innerHTML = "✅";
    return true;
}
function validateEmail() {
    var email = document.getElementById("contact-email").value;
    if(email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    } 
    if (!email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)) {
      emailError.innerHTML = "Email invalid";
      return false;
    }
    emailError.innerHTML = "✅";
    return true;
}
function validateMessage() {
    var message = document.getElementById("contact-message").value;
    var required = 30;
    var left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + " more characters required";
        return false;
    } 

    messageError.innerHTML = "✅";
    return true;
}

function validateForm() {
    if(validateName() && validatePhone() && validateEmail() && validateMessage()) {
        alert("Form submitted successfully");
        return true;
    } else {
        alert("Please fill the form correctly");
        return false;
    }
}