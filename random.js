var output = document.getElementById("arrow");
function leftArrow() {
getRandomNumber = Math.floor( Math.random() * 10 ) + 1; 

 if (getRandomNumber <= 5){
 	console.log(getRandomNumber)
  	output.innerHTML = `<div><img src="http://img.freepik.com/free-icon/right-arrow-of-straight-lines_318-70901.jpg?size=338c&ext=jpg"></div>`;
  } else {
  	output.innerHTML = `<div><img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Black_Left_Arrow.png"></div>`;
  }
}
document.addEventListener("click", leftArrow);