const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryHeader = document.querySelector(".primary-header");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

primaryNav.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
});

window.addEventListener("scroll", function() {
  primaryHeader.classList.toggle("sticky", window.scrollY > 0);
});

AOS.init({

  offset: 275,
  duration: 1000

});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-MXT0BFH7KE');

// function responsiveNavbar() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

  // window.onscroll = function() {stickyNavbar()};

  // function stickyNavbar() {

  //   var navbar = document.getElementById("myTopnav");
  //   var sticky = primaryHeader.offsetTop;

  //   if (window.pageYOffset >= sticky) {
  //     primaryHeader.classList.add("sticky")
  //   } else {
  //     primaryHeader.classList.remove("sticky");
  //   }
    
  // };



