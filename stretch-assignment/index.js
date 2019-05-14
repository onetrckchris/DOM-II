const rockets = document.querySelectorAll('.block');
let orderCount = -1;

for(let rocket of rockets) {
    rocket.setAttribute('src', 'rocket.jpg');

    rocket.addEventListener('click', (event) => {
        TweenMax.to(rocket, 3, {left: innerWidth - 170});
        console.log(rocket, event);
        rocket.style.order = orderCount;
        orderCount--;
    })
}