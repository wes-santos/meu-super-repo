document.getElementById("footer-container").style.backgroundColor = "#003533";
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = "#FF9F84";
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = "#F9DA5E";
document.getElementById('header-container').style.backgroundColor = "#05AF69";

for (let i = 0; i < document.querySelectorAll('.emergency-tasks h3').length; i += 1) {
    document.querySelectorAll('.emergency-tasks h3')[i].style.backgroundColor = "#A500F3";
}

for(let i = 0; i < document.querySelectorAll('.no-emergency-tasks h3').length; i += 1) {
    document.querySelectorAll('.no-emergency-tasks h3')[i].style.backgroundColor = "black";
}