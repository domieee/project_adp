
window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navigation = document.getElementById("navigation");
    const anchorBulb  = document.querySelectorAll("#navigation a svg");

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
