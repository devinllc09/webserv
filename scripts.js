document.addEventListener("DOMContentLoaded", function () {
  console.log("Document loaded, initializing...");

  // Get the hamburger and nav-container elements
  const hamburger = document.getElementById("hamburger");
  const navContainer = document.getElementById("nav-container");

  // Ensure the hamburger button is functional
  if (hamburger && navContainer) {
    hamburger.addEventListener("click", function () {
      console.log("Hamburger clicked!");
      navContainer.classList.toggle("show"); // Toggle the visibility of nav-container
    });
  }

  // Handle active link behavior in navigation
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Carousel functionality (remains unchanged)
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Carousel with animated text and images loaded.");
    showSlide(currentSlide); // Show initial slide
  });

  let currentSlide = 0;
  const totalSlides = document.querySelectorAll(".carousel-item").length;

  function showSlide(index) {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const carouselContent = document.querySelector(".carousel-content");
    const slideWidth = document.querySelector(
      ".carousel-container"
    ).clientWidth;

    // Reset all items' active classes and reset animations
    carouselItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Set the new active slide
    carouselItems[index].classList.add("active");

    // Translate the carousel to the new slide
    carouselContent.style.transform = `translateX(-${index * slideWidth}px)`;

    // Re-trigger the animations by removing and re-adding the animation classes
    const activeSlideText =
      carouselItems[index].querySelectorAll(".text-slide");
    const activeSlideImage = carouselItems[index].querySelector(".image-slide");

    // Remove the animation class momentarily to retrigger it
    activeSlideText.forEach((textElement) => {
      textElement.style.animation = "none";
      setTimeout(() => (textElement.style.animation = ""));
    });

    activeSlideImage.style.animation = "none";
    setTimeout(() => (activeSlideImage.style.animation = ""));
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  // Auto-advance the slides every 5 seconds
  setInterval(() => {
    nextSlide();
  }, 5000);
});
