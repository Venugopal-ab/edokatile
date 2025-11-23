// Select elements
const button = document.getElementById("showBtn");
const output = document.getElementById("result");

// Add event listener for button click
button.addEventListener("click", function () {
    const current = new Date();               // Get current date & time
    output.textContent = current.toString();  // Display it in <p>
});
