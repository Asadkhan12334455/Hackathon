// Getting the form and resume display elements
var form = document.getElementById("resume-form");
var resumeDisplay = document.getElementById("resume-display");
// Adding an event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Preventing the default form submission behavior
    // Collecting values from the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Creating the resume dynamically using the collected values
    var myResume = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = myResume;
    }
    else {
        console.error('The resume display element is missing');
    }
});
