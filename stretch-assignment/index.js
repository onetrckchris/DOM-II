const rockets = document.querySelectorAll('.block');
// let orderCount = -1;

for(let rocket of rockets) {
    rocket.setAttribute('src', 'rocket.jpg');

    rocket.addEventListener('mousedown', (event) => {
        rocket.style.transform = 'scaleX(1)';
        TweenMax.to(rocket, 2, {left: innerWidth - 180});
        // rocket.style.order = orderCount;
        // orderCount--;
    })

    rocket.addEventListener('mouseup', (event) => {
        rocket.style.transform = 'scaleX(-1)';
        TweenMax.to(rocket, 2, {left: 0});
    })
}