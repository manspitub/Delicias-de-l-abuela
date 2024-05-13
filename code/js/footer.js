window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    var scrollPosition = window.scrollY + window.innerHeight;
    var pageHeight = document.body.offsetHeight;
  
    if (scrollPosition >= pageHeight) {
      footer.style.display = 'block';
    } else {
      footer.style.display = 'none';
    }
  });