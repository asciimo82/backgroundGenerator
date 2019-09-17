var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h2");
var body = document.querySelector("body");

setGradient();

 function setGradient(){
	body.style.background = 
	"linear-gradient(to right, "
	 +color1.value
	 +" , "
	 +color2.value
	 + ")";

	 css.textContent = body.style.background +" ;";
}

function randomColorGenerator(){
	color1.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	color2.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);