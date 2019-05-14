// This is changing the color of the 'Fun Bush' logo h1 on mouseover.
const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let colorCount = -1;

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', (event) => {
    if(colorCount < colorArray.length-1) {
        colorCount++;
        logoHeading.style.color = colorArray[colorCount];
    } else {
        colorCount = -1;
        logoHeading.style.color = colorArray[colorCount];
    }
});

// This is changing the top image whenever you press down the right arrow key.
const busImgArray = ['./img/fun-bus.jpg', './img/holy-bus.jpg', './img/mercedes-bus.jpg', './img/school-bus.jpg'];
let busImgCount = 0;

const busImg = document.querySelector('.bus-img');
const body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight' && busImgCount < busImgArray.length-1) {
        busImgCount++;
        busImg.setAttribute('src', busImgArray[busImgCount]);
    } else if (event.code === 'ArrowRight') {
        busImgCount = 0;
        busImg.setAttribute('src', busImgArray[busImgCount]);
    }
});


// This changes the center images while being dragged.
const siteImgs = document.querySelectorAll('.img-content img');

for(let img of siteImgs) { // Thanks Josh
    const initialImg = img.attributes.src.value;

    img.addEventListener("dragstart", (event) => {
        event.target.setAttribute('src', './img/oof.gif')
    }, false);

    img.addEventListener("dragend", (event) => {
        event.target.setAttribute('src', initialImg)
      }, false);
}

// Checking to see that the page and all of it's components are fully loaded.
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

// Scaling the images up on mousedown.
// for(let img of siteImgs) {
//     img.addEventListener('mousedown', (event) => {
//         img.style.transform = 'scale(1.10, 1.10)';
//     })
// }

// Scaling the images back down on mouseup.
// for(let img of siteImgs) {
//     img.addEventListener('mouseup', (event) => {
//         img.style.transform = 'scale(1, 1)';
//     })
// }

for(let img of siteImgs) {
    img.addEventListener('click', (event) => {
        img.classList.toggle('scale-up');
    })
}

