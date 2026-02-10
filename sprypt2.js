const img = document.querySelector(".karusel");
const imgNum = 5;
const delay = 2000;
img.width = 900;

let i = 1;
setTimeout(function tick(){
    i = i + 1;
    if (i > imgNum) i = 1;
    img.src = `imge/photo${i}.jpg`;
    setTimeout(tick, delay)
}, delay);