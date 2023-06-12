document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".scroll-container");

  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      scrollContainer.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    });
  });

  function updateNavLinkColor() {
    const section1 = document.getElementById("section1");
    const navLinks = document.querySelectorAll(".nav-link");

    if (
      scrollContainer.scrollTop >= section1.offsetTop &&
      scrollContainer.scrollTop < section1.offsetTop + section1.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.style.color = "white";
      });
    } else {
      navLinks.forEach((link) => {
        link.style.color = "";
      });
    }
  }

  // Call the updateNavLinkColor function on page load
  updateNavLinkColor();

  // Call the updateNavLinkColor function when scrolling
  scrollContainer.addEventListener("scroll", updateNavLinkColor);
});
