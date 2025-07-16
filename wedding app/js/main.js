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
  console.log("Navigating to section:", name);
  let sections = document.querySelectorAll("section");
  let header = document.querySelector("header");
  let banner = document.querySelector(".banner");

  // Hide all sections
  sections.forEach((section) => {
    section.classList.remove("section-show");
  });

  // Show the section by ID
  const targetSection = document.getElementById(name);
  if (targetSection) {
    targetSection.classList.add("section-show");
    header.classList.add("active");
  }

  // Hide banner when a section is active
  if (banner) {
    if (name === "home") {
      banner.style.display = "flex";
    } else {
      banner.style.display = "none";
    }
  }
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
      toggleMenu();
    });
  });

  // Initialize AOS library
  if (typeof AOS !== "undefined") {
    AOS.init();
  }
});

//reset header to initali state

const resetHeader = () => {
  console.log("Resetting header to home");
  let header = document.querySelector("header");
  header.classList.remove("active");

  // Hide all sections
  let sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.remove("section-show");
  });

  // Show banner (home)
  let banner = document.querySelector(".banner");
  if (banner) {
    banner.style.display = "flex"; // or remove any hiding styles
  }
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
  console.log("Menu:", menu);
  console.log("Nav Menu:", navMobile);
  if (!menu || !navMobile) {
    console.log("not work");
  }
  menu.classList.toggle("active");
  navMobile.classList.toggle("active");
};
