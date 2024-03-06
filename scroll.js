let scrollBtn = document.getElementById("scroll");

// Show or hide scroll button based on scroll position
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll to top when button is clicked
scrollBtn.addEventListener("click", () => {
  // Smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
