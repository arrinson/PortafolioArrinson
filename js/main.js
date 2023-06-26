/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* MENU SHOW */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* MENU HIDDEN */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ACCORDION SKILLS */
const skillsContent = document.getElementsByClassName(
    "skills-container-content"
  ),
  skillsHeader = document.querySelectorAll(".skills-container-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-container-content skills-close";
  }
  if (itemClass === "skills-container-content skills-close") {
    this.parentNode.className = "skills-container-content skills-open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/* QUALIFICATION TABS */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});

/* SERVICES MODAL */
const modalViews = document.querySelectorAll(".services-modal"),
  modalBtns = document.querySelectorAll(".services-button"),
  modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/* PORTFOLIO SWIPER  */
var swiperPortfolio = new Swiper(".portfolio-container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/* TESTIMONIAL */
var swiperTestimonial = new Swiper(".testimonial-container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 50,

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* SHOW SCROLL UP */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* DARK LIGHT THEME */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-moon";


// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});







//NIEVE//

// Definimos un limite de hasta 100 emojis en pantalla
const COUNT = 20;

// Definimos tamaños de emojis que se seleccionaran aleatorios en un arreglo
const SIZES = [
    'rainDrop--s',
	'rainDrop--s',
	'rainDrop--s',
	'rainDrop--s',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--l',
	'rainDrop--xl',
	'rainDrop--xms'
];

// Creamos un lista de los emojis que podrian salir en pantallla en un arreglo

const EMOJI = [
    '😀',
    '😁',
    '😃',
    '😄',
    '😅',
    '😆',
    '😉',
    '😊',
    '😎',
    '😍',
    '😘',
    '🥰',
    '😗',
	'✌️',
	'👋'
];

// Seleccionamos nuestro contenedor
const rainContainer = document.querySelector('.rain-container');
// Generamos nuevas gotas de emoji
const genRainDrop = (size, xStart, xEnd, yStart, emoji)=>{
    // Creamos los nuevos elementos contenedores de nuestros emojis
    const r = document.createElement('div');
    r.innerText = emoji;
    r.classList.add('rainDrop', size);
    r.style.setProperty('--x-start', xStart + 'vw');
    r.style.setProperty('--x-end', xEnd + 'vw');
    r.style.setProperty('--y-start', yStart + 'vh');
    r.style.setProperty('--y-end', yStart + 200 + 'vh');

    return r;
}

//Creamos un ciclo para recorrer todos nuestros elementos
for(let i=0; i<COUNT; i++){
    // declaramos size y creamos la funcion para hacer el random de nuestros SIZES
    const size = randFromList(SIZES);
    // para buscar un randon en el inicio del eje X
    const xStart = getRamdomArbitrary(0,100);    
    // para buscar un randon en el fin del eje X
    const xEnd = getRamdomArbitrary(xStart - 20, xStart + 20);
    // ahora vamos a crear un rando para nuestros emojis usamos la funcion de SIZE
    const emoji = randFromList(EMOJI);
    // agregamos un ramdon para nuestro eje y
    const yStart = getRamdomArbitrary(-100,0);
    // llamamos a nuestro contenedor y le agregamos nuestros nuevos elementos
    rainContainer.appendChild(genRainDrop(size, xStart, xEnd, yStart, emoji));

}

// 1 función para hacer el randon de la lista de tamaños SIZES
function randFromList(items){
    // math.floor nos devolvera un numero entero de lo que saldra del math.ramdom
    return items[Math.floor(Math.random()*items.length)];
}

// función para el random
function getRamdomArbitrary(min,max) {
    return Math.random() * (max - min) + min;
}


/* CARGUE DE ENTRADA */




