const body = document.querySelector("body");
const myImg = document.getElementById("myImg");
let rotation = 0;

body.addEventListener('mousemove',() => {
    rotation += 1 % 360
    myImg.style.transform = `rotate(${rotation}deg)`;
});