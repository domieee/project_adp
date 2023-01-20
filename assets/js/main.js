window.onscroll = () => { scrollNavbar(), attachment() };

scrollNavbar = () => {
    // Target elements
    const navigation = document.getElementById("navigation");
    const anchorBulb = document.querySelectorAll("#navigation a svg");

    if (document.documentElement.scrollTop > 100) {
        navigation.classList.add("pa-fixed-header");

        // Change the color of links on scroll
        for (let i = 0; i < anchorBulb.length; i++) {
            const element = anchorBulb[i];
            element.classList.add('svg-scroll');
        }

    } else {
        navigation.classList.remove("pa-fixed-header");

        // Change the color of links back to default
        for (let i = 0; i < anchorBulb.length; i++) {
            const element = anchorBulb[i];
            element.classList.remove('svg-scroll');
        }
    }
}

function attachment() {
    let heigth = window.pageYOffset;
    const attachment = document.getElementById("image-bg");
    console.log(heigth);
    if (heigth > 880) {
        attachment.style.backgroundAttachment = "scroll";
    } else {
        attachment.style.backgroundAttachment = "fixed";
    }
}

document.getElementById("")


function party() {

let element = document.querySelector('.subscribe')

let { top, bottom, left, right } = element.getBoundingClientRect()
    confetti({
        origin: {            
            x: ((left + right) / 2) / window.innerWidth,
            y: ((top + bottom) / 2) / window.innerHeight
        }
    });
}


function changeDOMElements() {
    const email = document.getElementById('mail');
    console.log(email.value);
    
}

function changeDOMcolors() {
    let body = document.querySelector("body");

    let state = 0;
    if (state == 0) {
        body.style.backgroundColor = '#fff';
        state++;
    } else {
        body.style.backgroundColor = 'blue'
    }
}

document.querySelector("#subscribe-button-red").addEventListener('click', changeDOMElements);
document.getElementById("bulb").addEventListener('click', changeDOMcolors);

