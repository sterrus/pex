(function() {
    const list = document.getElementById('nav-list'),
          btn = document.getElementById('nav-btn'),
          nav = document.getElementById('nav');
    
    btn.addEventListener('click', function() {
        if (list.classList.contains('active')) {
            list.classList.remove('active');
        } else {
            list.classList.add('active');
        }
    })
    
    window.addEventListener('scroll', function() {
        const currentPosition = pageYOffset;
        if (currentPosition > 80) {
            list.classList.add('sticky');
            nav.classList.add('sticky');
            list.classList.add('sticky');
        } else {
            list.classList.remove('sticky');
            nav.classList.remove('sticky');
            list.classList.remove('sticky');
        }
    })
})();