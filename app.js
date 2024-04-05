document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector(".toggle-btn");
    const dropMenu = document.querySelector(".drop-container");

    toggleBtn.addEventListener("click", () => {
        dropMenu.classList.toggle("opacity");
    });
});