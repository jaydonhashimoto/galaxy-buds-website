//execute myFunction when user scrolls
window.onscroll = () => {
  setSticky();
};

//get nav
const nav = document.getElementById('myTopnav');

//get offset position of the nav
const sticky = nav.offsetTop;

//add sticky class to nav when scroll position is reached.
//remove sticky when moved from scroll position
function setSticky() {
  if (window.pageYOffset > sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
