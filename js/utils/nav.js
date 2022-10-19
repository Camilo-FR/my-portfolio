// ——————————————————————————————————————————————————
// NAVBAR
// ——————————————————————————————————————————————————

const homeImg = document.querySelector(".img-home");
const aboutImg = document.querySelector(".img-about");
const skillsImg = document.querySelector(".img-skills");
const projectsImg = document.querySelector(".img-projects");
const contactImg = document.querySelector(".img-contact");

homeImg.addEventListener("click", () => {
  window.location.href = "index.html";
});

aboutImg.addEventListener("click", () => {
  window.location.href = "about.html";
});
skillsImg.addEventListener("click", () => {
  window.location.href = "skills.html";
});
projectsImg.addEventListener("click", () => {
  window.location.href = "projects.html";
});
contactImg.addEventListener("click", () => {
  window.location.href = "contact.html";
});
