const slideNavigator = (name) => {
  // Select all slides with the class .bg-slide
  const slides = document.querySelectorAll(".bg-slide");

  // Loop through each slide
  slides.forEach((slide) => {
    slide.classList.remove("active"); // Remove the active class
    if (slide.classList.contains(name)) {
      slide.classList.add("active"); // Add active class if it matches
    }
  });
};

window.addEventListener("load", () => {
  // Select all buttons with the class .slide-btn
  const slideBtnList = document.querySelectorAll(".slide-btn");

  // Loop through each button and attach a click event listener
  slideBtnList.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all buttons
      slideBtnList.forEach((el) => {
        el.classList.remove("active");
      });

      // Add active class to the clicked button
      this.classList.add("active");

      // Call the slideNavigator function with the data-target attribute
      const target = this.getAttribute("data-target");
      slideNavigator(target);
    });
  });
});

//activate section

const sectionNavigator = (name) => {
  let sections = document.querySelectorAll(".section");
  let header = document.querySelector("header");
  sections.forEach((section) => {
    section.classList.remove("section-show");
    if (section.classList.contains(name)) {
      section.classList.add("section-show");
      header.classList.add("active");
    }
  });
};

// Call the sectionNavigator function with the data-target attribute
window.addEventListener("load", () => {
  const navList = document.querySelectorAll(".nav-btn");
  navList.forEach((nav) => {
    nav.addEventListener("click", function (e) {
      e.preventDefault();
      navList.forEach((el) => {
        el.classList.remove("active");
      });
      this.classList.add("active");
      sectionNavigator(this.getAttribute("data-target"));
      screen.width < 768 && toggleMenu;
    });
  });
});

//reset header to initali state

const resetHeader = () => {
  let header = document.querySelector("header");
  header.classList.remove("active");
};

const initNavigation = () => {
  const navList = document.querySelectorAll(".nav-btn");
  navList.forEach((el) => {
    el.classList.remove("active");
    if (el.getAttribute("data-target") === "about") {
      el.classList.add("active");
    }
  });
  sectionNavigator("about");
};

// Toggle Menu

const toggleMenu = () => {
  const menu = document.querySelector(".menu");
  const navMobile = document.querySelector(".nav-mobile");
  menu.classList.toggle("active");
  navMobile.classList.toggle("active");
};
