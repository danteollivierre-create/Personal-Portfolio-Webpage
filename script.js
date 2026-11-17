//light and dark mode 

window.addEventListener("DOMContentLoaded", () => {

    const lightModeButton = document.getElementById("lightModeButton");

    console.log(lightModeButton);

const savedTheme = localStorage.getItem("theme")

if (savedTheme === "light"){
document.documentElement.setAttribute("data-theme", "light");
lightModeButton.textContent = "Dark Mode";
}

lightModeButton.addEventListener("click",() => {
    const currentTheme = 
        document.documentElement.getAttribute("data-theme");



        if(currentTheme === "light"){
    document.documentElement.removeAttribute("data-theme");
    
        localStorage.setItem("theme","dark");
        lightModeButton.textContent = "Light Mode";

}   else{
    document.documentElement.setAttribute("data-theme", "light");

    localStorage.setItem("theme", "light");
    lightModeButton.textContent = "Dark Mode";

    }
});

});


//date dependant msg thing

const hour = new Date().getHours();

let message;

if(hour < 12){
    message = "Good Morning!";
} else if(hour < 18){
    message = "Good Afternoon!";
} else {
    message = "Good Night!";
}

alert(message);


window.onload = function(){
const clock = document.getElementById("clock");

function runningClock(){
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

 clock.textContent = `${hours}:${minutes}:${seconds}`;

}

runningClock();
setInterval(runningClock, 1000);

};
