
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
        console.log("hallo welt");
        attachment.style.backgroundAttachment = "scroll";
    } else {
        attachment.style.backgroundAttachment = "fixed";
    }
}

// const attachment = document.getElementsByClassName("image-bg");
//     let scrollheight = attachment.scrollTop;

//     if (document.documentElement.scrollTop > 500) {
//         console.log("hi");
//     }