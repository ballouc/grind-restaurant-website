window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var navbar = document.querySelector('.navbar');
    if (scrollPosition > 0) {
      navbar.style = "display: block; animation-name: slideDown; animation-duration: .5s; animation-fill-mode: forwards; animation-timing-function: ease-in;";
    } else {
      navbar.style = "display: none;";
    }
  });