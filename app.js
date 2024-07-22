const mobile_nav_icon = document.querySelector(".bars");
const desktop_nav = document.querySelector(".menu");

mobile_nav_icon.addEventListener("click", () => {
  mobile_nav_icon.classList.toggle("bars-active");
  desktop_nav.classList.toggle("menu-active");

  if (mobile_nav_icon.classList.contains("bars-active"))
    document.documentElement.style.overflow = "hidden";
  else document.documentElement.style.overflow = "unset";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    mobile_nav_icon.classList.remove("bars-active");
    desktop_nav.classList.remove("menu-active");
  }
});

const mobile_nav_close = () => {
  mobile_nav_icon.classList.remove("bars-active");
  desktop_nav.classList.remove("menu-active");
  document.documentElement.style.overflow = "unset";
};

// ------ NAVIGATION ------------ \\
const AboutUs = document.querySelector(".section-2");
const scrollToAboutUs = () => {
  AboutUs.scrollIntoView({ behavior: "smooth" });
  mobile_nav_close();
};
const Awards = document.querySelector(".section-3");
const scrollToAwards = () => {
  Awards.scrollIntoView({ behavior: "smooth" });
  mobile_nav_close();
};
const People = document.querySelector(".section-4");
const scrollToPeople = () => {
  People.scrollIntoView({ behavior: "smooth" });
  mobile_nav_close();
};
const Gallery = document.querySelector(".section-5");
const scrollToGallery = () => {
  Gallery.scrollIntoView({ behavior: "smooth" });
  mobile_nav_close();
};
const Info = document.querySelector("footer");
const scrollToInfo = () => {
  Info.scrollIntoView({ behavior: "smooth" });
  mobile_nav_close();
};

// ------------ CAROUSEL --------------- \\
const carousel = document.querySelector(".home-image");
const carousel_img = document.querySelector(".home-image img");
const carousel_img_background = document.querySelector(".home-image .circle");
const carousel_num = document.querySelector(".carousel span");

const wine_colors = {
  RED: 1,
  GREEN: 2,
  BLACK: 3,
};

let current_wine = wine_colors.RED;

const change_carousel_img = () => {
  carousel.classList.remove("home-image-animation");
  carousel.classList.add("home-image-animation");
  carousel.onanimationend = () => {
    carousel.classList.remove("home-image-animation");
  };

  //CHANGE SOURCE
  carousel_img.src = `./pics/WINE${current_wine}.png`;

  //CHANGE NUMBER
  carousel_num.innerHTML = `0${current_wine}/03`;

  //CHANGE BACKGROUND
  switch (current_wine) {
    case wine_colors.RED:
      carousel_img_background.style.background =
        "radial-gradient(circle, rgba(241, 43, 43, 1) 0%, rgba(255, 236, 236, 1) 100%)";
      break;
    case wine_colors.GREEN:
      carousel_img_background.style.background =
        "radial-gradient(circle, rgba(112,107,16,1) 0%, rgba(251,247,247,1) 100%)";
      break;
    case wine_colors.BLACK:
      carousel_img_background.style.background =
        "radial-gradient(circle, rgba(23,23,19,1) 10%, rgba(251,247,247,1) 100%)";
      break;
  }
};

const carousel_next = () => {
  current_wine++;
  if (current_wine > wine_colors.BLACK) current_wine = wine_colors.RED;
  change_carousel_img();
};

const carousel_prev = () => {
  current_wine--;
  if (current_wine < wine_colors.RED) current_wine = wine_colors.BLACK;
  change_carousel_img();
};

setInterval(carousel_next, 5000);
