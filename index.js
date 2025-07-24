
// ================ mobile devices navbar =======================
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let navid = document.getElementById('navbarid');

menuIcon.onclick = () => {
  navBar.classList.toggle('active');

  if (menuIcon.className === 'bx bx-menu') {
    // menuIcon.classList.toggle('bx-x');
    menuIcon.className += ' bx-x';
    navid.style.left = '0';


  } else {
    menuIcon.className = "bx bx-menu";
    navid.style.left = '-100%';
  };

}





// ================ scroll bar  navbar =======================
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelectorAll('header nav a[href*="' + id + '"]').forEach(link => {
          link.classList.add('active');
        });

        // document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active');
      })
    }

  })


  // ================ sticky navbar =======================
  let header = document.querySelector(".header");
  header.classList.toggle('sticky', window.scrollY > 100);

  // ================ remove navbar   =======================

  menuIcon.classList.remove('bx-x');
  navBar.classList.remove('active');
}

// ================ swaper  =======================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



let darkmodeIcon = document.querySelector('#darkMoon-icon');
darkmodeIcon.onclick = () => {
  darkmodeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode')

}

//  google sheet ----------------------------
const scriptURL = 'https://sheetdb.io/api/v1/5h3m36fryyuoh';
const form = document.getElementById('formDB');

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => Swal.fire({
      title: "Thank you for contacting us !",
      icon: "success"
    })).then(()=>{
      location.reload();
    })
    .catch(error => Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Something went wrong!',
      confirmButtonText: 'Try Again'
    }));
});
