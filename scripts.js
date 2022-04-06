let iteration = 1;
const iterations = [];
const buttonNavAdder = document.getElementById("nav-adder");
buttonNavAdder.addEventListener("click", function() {
    console.log("event listener fired");

    const navSection = document.getElementsByClassName("section nav")[0];
    const nav = navSection.getElementsByTagName("nav")[0];

    const newNavItem = document.createElement("div")
    newNavItem.className = "nav-item";
    const textToAdd = "Test " + iteration++;
    newNavItem.textContent = textToAdd;

    nav.appendChild(newNavItem);

    iterations.push(textToAdd);
    console.log(iterations);
});