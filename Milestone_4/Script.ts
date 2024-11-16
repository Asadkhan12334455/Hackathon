// Getting the form, resume display and reset button elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplay = document.getElementById("resume-display") as HTMLDivElement;
const resetButton = document.getElementById("reset-button") as HTMLButtonElement;

// Function to update the resume dynamically based on input
function updateResume() {
    // Collecting values from form fields
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Dynamically create the resume content
    const myResume = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
    <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    `;

    // Display the generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = myResume;
    } else {
        console.error('The resume element is missing');
    }
}

// Event listener for form submission (to prevent page refresh and update resume)
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    updateResume();
});

// Event listener for reset button (to clear the form and reset the resume)
resetButton.addEventListener('click', () => {
    form.reset(); // Clear all form inputs
    resumeDisplay.innerHTML = ""; // Clear the displayed resume
});
