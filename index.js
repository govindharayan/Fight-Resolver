var left = Math.floor(Math.random() * 5) + 1;
var right = Math.floor(Math.random() * 5) + 1;
var leftimg = "images/l" + left + ".png"; 
document.querySelector("#img1").setAttribute("src",leftimg);

var rightimg = "images/r" + right + ".png";
document.querySelector("#img2").setAttribute("src", rightimg);

if(right > left) {
    document.querySelector("h2").innerHTML="Right won!";

}
else if (left > right) {
    document.querySelector("h2").innerHTML="Left Won!";

}
else {
    document.querySelector("h2").innerHTML="Continue Fighting";
}

