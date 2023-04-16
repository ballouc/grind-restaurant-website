window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var navbar = document.querySelector('.navbar');
    if (scrollPosition > 0) {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
    }
  });