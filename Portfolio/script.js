const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");
navToggle && navToggle.addEventListener("click", (() => {
    navMenu.classList.add("show-menu")
})), navClose && navClose.addEventListener("click", (() => {
    navMenu.classList.remove("show-menu")
}));
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    document.getElementById("nav-menu").classList.remove("show-menu")
}


const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const e = window.pageYOffset;
    sections.forEach((t => {
        const s = t.offsetHeight,
            l = t.offsetTop - 50;
        sectionId = t.getAttribute("id"), e > l && e <= l + s ? document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link") : document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
    }))
}

function scrollHeader() {
    const e = document.getElementById("header");
    this.scrollY >= 80 ? e.classList.add("scroll-header") : e.classList.remove("scroll-header")
}

function scrollUp() {
    const e = document.getElementById("scroll-up");
    this.scrollY >= 560 ? e.classList.add("show-scroll") : e.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollActive), window.addEventListener("scroll", scrollHeader), window.addEventListener("scroll", scrollUp);


let mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeWork(wl);
  });
});


document.addEventListener('DOMContentLoaded', function() {
      const searchInput = document.getElementById('searchInput');
      const cards = document.querySelectorAll('.work__card');

      searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        cards.forEach(card => {
          const title = card.querySelector('.work__title').textContent.toLowerCase();

          if (title.includes(searchTerm)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });