// Adding|Removing 'active' class to header when the page is scrolled beyond 80px
window.onscroll = () => {
  // Remove the 'active' class from the search form when scrolling to ensure the search form is hidden
  searchForm.classList.remove('active');
  if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
  }else{
      document.querySelector('.header .header-2').classList.remove('active');
  }
}

/* ----------------------------- */

// Checking the scroll position on page load and adding|removing 'active' class if scrolled past 80px
window.onload = () => {
  if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
  }else{
      document.querySelector('.header .header-2').classList.remove('active');
  }
  fadeOut();
}

/* ----------------------------- */

// Toggle the 'active' class on the search form when the search button is clicked to show or hide the form
let searchForm = document.querySelector('.search-form');
let searchButton = document.querySelector('#search-btn');
searchButton.onclick = () => {
     searchForm.classList.toggle('active');
}

/* ----------------------------- */

let loginForm = document.querySelector('.login-form-container');
let loginButton = document.getElementById('login-btn');
let closeButton = document.getElementById('close-login-btn');
// Display the login form when the login button is clicked
loginButton.onclick = () => {
    loginForm.classList.toggle('active');
}

/* ----------------------------- */

// Hide the login form when the close button is clicked
closeButton.onclick = () => {
    loginForm.classList.remove('active');
}

/* ----------------------------- */ 

// Initialize Books Swiper with looping, autoplay, and responsive breakpoints
var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

/* ----------------------------- */ 

// Initialize Featured Books Swiper with looping, autoplay, and responsive breakpoints
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",

    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
});

/* ----------------------------- */ 

// Initialize arrivals Books Swiper with looping, autoplay, and responsive breakpoints
var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});

/* ----------------------------- */ 

// Initialize reviews Swiper with looping, autoplay, and responsive breakpoints
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay:{
          delay: 9500,
          disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
});

/* ----------------------------- */

// Initialize blogs Swiper with looping, autoplay, and responsive breakpoints
var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay:{
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

/* ----------------------------- */

// To desactivate the loader by adding the 'active' class to the 'loader-container' element
function loader() {
   document.querySelector('.loader-container').classList.add('active');
 }

// Activate the loader and desactivate it after 4 seconds (4000ms)
function fadeOut() {
   setTimeout(loader, 4000);
 }