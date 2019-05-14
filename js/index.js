// This is changing the color of the 'Fun Bush' logo h1 on mouseover.
const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let count = -1;

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', (event) => {
    if(count < colorArray.length-1) {
        count++;
        console.log(count)
        logoHeading.style.color = colorArray[count];
    } else {
        count = -1;
        logoHeading.style.color = colorArray[count];
    }
})

