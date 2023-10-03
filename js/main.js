const mobileNav = document.getElementById('nav-links')

const toggleBtnNav = document.getElementsByClassName('hamburger-btn')[0]
// console.log(toggleBtnNav);
// console.log(mobileNav);

toggleBtnNav.addEventListener("click", () => {
  // console.log("Clicked");
  mobileNav.classList.toggle('hamburger');

})
