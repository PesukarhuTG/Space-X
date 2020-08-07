/* VIDEO EARTH */

var instance = new vidbg('.video', {
    mp4: 'video/world.mp4', // URL or relative path to MP4 video
    webm: 'video/world.webm', // URL or relative path to webm video
    poster: 'video/poster.jpg', // URL or relative path to fallback image
    overlay: false, // Boolean to display the overlay or not
  });

  var rellax = new Rellax('.rocket');

/* FORM REGISTRATION OPEN/CLOSE */

var footerBtn = document.querySelector('.footer-btn');
var modal = document.querySelector('.modal');
var close = document.querySelector('.close-icon');


footerBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });
    
    close.addEventListener('click', () => {
        modal.classList.remove('active');
});


/* AOS ANIMATION */

AOS.init();