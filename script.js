// 1 SHOW MESSAGE ON BUTTON CLICK

let showMessageBtn = document.getElementById("showMessageBtn");
let message = document.getElementById("message");

showMessageBtn.addEventListener("click", function () {
  message.style.display = "block"; // Show the message
  console.log("Show Message button clicked");
});

// 2 TOGGLE LIGHT / DARK MODE

let toggleThemeBtn = document.getElementById("toggleThemeBtn");
let isDarkMode = false; // Keep track of the theme

toggleThemeBtn.addEventListener("click", function () {
  if (isDarkMode) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    toggleThemeBtn.innerText = "Switch to Dark Mode";
    isDarkMode = false;
  } else {
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white";
    toggleThemeBtn.innerText = "Switch to Light Mode";
    isDarkMode = true;
    console.log("Switched to Dark Mode");
  }
});

// 3 COUNTER FUNCTIONALITY

let counter = document.getElementById("counter");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let count = 0; // Start from 0

increaseBtn.addEventListener("click", function () {
  count++;
  counter.innerText = count;
  console.log("Counter increased to: " + count);
});

decreaseBtn.addEventListener("click", function () {
  if (count > 0) { // prevent going below 0
    count--;
    counter.innerText = count;
    console.log("Counter decreased to: " + count);
  }
  else {
    console.log("Counter is already at 0 !");
  }
});

//  4 FORM VALIDATION

document.getElementById("myForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();  

    //clear previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if(name === "") {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name is required.";
        isValid = false;
    } else if(name.length < 5) {
        document.getElementById("nameError").style.color = "red";
        document.getElementById("nameError").innerText = "Name must be at least 5 characters.";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email === "") {  
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Email is required.";
        isValid = false;
    } else if(!email.match(emailPattern)) {
        document.getElementById("emailError").style.color = "red";
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    }

    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(password === "") {  
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password is required.";
        isValid = false;
    } else if(!password.match(passwordPattern)) {   
        document.getElementById("passwordError").style.color = "red";
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
        isValid = false;
    }  
    
    //check if all validations passed
    if(isValid) {
        //submit form or perform desired actions
        alert("Form submitted successfully!");
        document.getElementById("myForm").reset(); //reset form fields
    }

}