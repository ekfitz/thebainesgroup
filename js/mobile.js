document.body.onload = setMobile;
window.addEventListener("resize", setMobile);

var menu = document.getElementById("menu");
var logo1 = document.getElementById("logo1");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var b1 = document.getElementById("b1");
var uxtext = document.getElementById("uxtext");
var cutux = document.getElementById("cutux");
var b2 = document.getElementById("b2");
var info1 = document.getElementById("info1");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var rocket1 = document.getElementById("rocket1");
var linkedin = document.getElementById("linkedin");
var twitter = document.getElementById("twitter");
var facebook = document.getElementById("facebook");
var youtube = document.getElementById("youtube");
var copyright = document.getElementById("copyright");
var copyrighttext = document.getElementById("copyrighttext");

menu.onclick = showMenu;

logo1.style.fontSize = "2em";
logo1.style.top = "0.5%";
nav1.style.top = "-5%";
nav2.style.top = "-5%";
nav3.style.top = "-5%";


logo1.innerHTML = "t b g";
nav1.innerHTML = "Press";
nav2.innerHTML = "Studio";
nav3.innerHTML = "About";
t1.innerHTML = "Something Motivational Right Here";
t2.innerHTML = "Maybe some smaller text here to describe what happens when you push the button. It can be in a different font";
b1.innerHTML = "Start Today";

uxtext.innerHTML = "UX DESIGN";
cutux.src = "images/infog2.png";
b2.innerHTML = "Free Consultation";
info1.src = "images/info.png";
t3.innerHTML = "UI DESIGN";
t4.innerHTML = "Brand & Product Consultation";
rocket1.src = "images/rocket.png";
linkedin.src = "images/linkedin.png";
twitter.src = "images/twitter.png";
facebook.src = "images/facebook.png";
youtube.src = "images/youtube.png";
copyright.src = "images/copyright.png";
copyrighttext.innerHTML = "The Baines Group, LLC 2020";

function setMobile() {
  var w = window.innerWidth;

  if (w > 1000) {
    window.location.replace("index.html");
  }
}

function showMenu() {
  if (nav1.style.top == "-5%") {
    nav1.style.top = "2.5%";
    nav2.style.top = "2.5%";
    nav3.style.top = "2.5%";
    menu.style.transform = "rotate(-90deg)";
  } else {
    nav1.style.top = "-5%";
    nav2.style.top = "-5%";
    nav3.style.top = "-5%";
    menu.style.transform = "rotate(0deg)";
  }
}
