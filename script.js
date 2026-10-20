const form = document.getElementById("registration-form");
const feedback = document.getElementById("form-feedback");

// Only grab these if form actually exists to prevent crashes
const submitButton = form ? form.querySelector(".submit-button") : null;
const toggleButtons = form ? form.querySelectorAll(".password-toggle") : null;

const fields = {
  fullName: document.getElementById("full-name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  nationalId: document.getElementById("national-id"),
  county: document.getElementById("county"),
  dateOfBirth: document.getElementById("date-of-birth"),
  password: document.getElementById("password"),
  confirmPassword: document.getElementById("confirm-password"),
  employmentStatus: document.getElementById("employment-status"),
  contributionFrequency: document.getElementById("contribution-frequency"),
  monthlySavings: document.getElementById("monthly-savings"),
  terms: document.getElementById("terms"),
};

// FIXED: Removed the '#' symbol
const regForm = document.getElementById('registration-form');

if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });
} else {
    console.log("form is not there!!! ");    
}

let validationFailed = false;

for (const [fieldName, elementRef] of Object.entries(fields)) {
  if (elementRef === null) {
    console.log("Error: The required element for '" + fieldName + "' could not be found.");
    validationFailed = true; // FIXED: Removed 'let' so it updates the outer variable
  } else {
    console.log("Success: '" + fieldName + "' verified.");
  }
}

if (validationFailed === true) {
    console.error("🛑 HALT: Form structure is broken! Missing required inputs or error wrappers.");
    alert("System Error: The registration form layout is broken. Please contact support.");
} else {
    console.log("Success: All form elements verified. Ready to attach event listeners.");
}

let fullName = document.getElementById('full-name');
let nameError = document.getElementById('full-name-error');

if (fullName) {
  console.log("FullName exists:", fullName.value);
} else {
  console.error("Error: Full-name element is missing!");
}

if (nameError) {
  // FIXED: Error wrappers use .textContent, not .value
  console.log("Name error wrapper exists, current text:", nameError.textContent);
} else {
  console.log("Name error is missing"); // FIXED: Fixed typo in console
}