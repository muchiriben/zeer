// script.js
const sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach(button => {
    button.addEventListener("click", () => {
        sizeButtons.forEach(btn => btn.classList.remove("selected")); // Remove 'selected' class from all buttons
        button.classList.add("selected"); // Add 'selected' class to the clicked button
    });
});
