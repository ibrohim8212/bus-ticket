var age = parseInt(prompt("How old are you?").trim(), 10);
var ageAverage = 7;
var ageOldMan = 60;

if (isNaN(age)) {
  document.querySelector(".title-mini").textContent = "Enter the number";
}
else if (age >= ageOldMan) {
  document.querySelector(".title-mini").textContent = "Your ticket is free";
}
else if (age >= ageOldMan) {
  document.querySelector(".title-mini").textContent = "Your ticket is free";
}
else if (age >= ageAverage) {
  document.querySelector(".title-mini").textContent = "Please buy the ticket";
}
else if (age < ageAverage) {
  document.querySelector(".title-mini").textContent = "Your ticket is free";
};