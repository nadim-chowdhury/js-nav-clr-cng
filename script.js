const bgNavbar = document.getElementById("bg-navbar");

window.onscroll = () => {
  let scroll_nav = window.scrollY;

  if (scroll_nav >= 150) {
    bgNavbar.classList.add("color-a");
  } else {
    bgNavbar.classList.remove("color-a");
  }
};
