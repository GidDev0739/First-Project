/*document.getElementById("toggle-container");*/
const toggleSwitch = document.querySelector(".switch");
const toggleSlider = document.querySelector(".slider");

 toggleSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if(document.body.classList.contains("dark-theme")){
      toggleSwitch.style.background = "blue";
      toggleSlider.style.left = "58px";
    }

    else

        {
         toggleSwitch.style.background = "black";
         toggleSlider.style.left = "1px";
      }
 })