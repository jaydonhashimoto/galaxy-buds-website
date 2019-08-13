//execute myFunction when user scrolls
window.onscroll = () => {
  myFunction();
};

//get nav
const nav = document.getElementById('myTopnav');

//get offset position of the nav
const sticky = nav.offsetTop;

//add sticky class to nav when scroll position is reached.
//remove sticky when moved from scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
