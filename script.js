// Countdown Timer Logic
const countdownDurationMinutes = 4320; // 3 days = 3 * 24 * 60 = 4320 minutes
let startTime = new Date().getTime();

function updateCountdown() {
  const now = new Date().getTime();
  let elapsed = now - startTime;

  // If the elapsed time exceeds the countdown duration, reset the start time
  if (elapsed >= countdownDurationMinutes * 60 * 1000) {
    startTime = now;
    elapsed = 0;
  }

  const remaining = countdownDurationMinutes * 60 * 1000 - elapsed;

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

// Initial call to display countdown immediately
updateCountdown();
// Update countdown every second
setInterval(updateCountdown, 1000);

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// Features Grid Auto-Scroll (for mobile, if applicable)
const slider = document.querySelector(".features-grid");
if (slider) {
  let scrollAmount = 0;
  const scrollStep = 2;
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  function autoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount >= maxScrollLeft) {
      scrollAmount = 0;
    }
    slider.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  let scrollInterval = setInterval(autoScroll, 30);

  slider.addEventListener("mouseenter", () => {
    clearInterval(scrollInterval);
  });
  slider.addEventListener("mouseleave", () => {
    scrollInterval = setInterval(autoScroll, 30);
  });
}

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;

    // If already active, close it
    if (faqItem.classList.contains("active")) {
      faqItem.classList.remove("active");
    } else {
      // Close all other open FAQs
      document.querySelectorAll(".faq-item.active").forEach((item) => item.classList.remove("active"));
      // Open the current FAQ
      faqItem.classList.add("active");
    }
  });
});



const offers = document.querySelectorAll('.offer');

function checkOffers() {
  const triggerBottom = window.innerHeight * 0.85;

  offers.forEach(offer => {
    const offerTop = offer.getBoundingClientRect().top;
    if (offerTop < triggerBottom) {
      offer.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkOffers);
window.addEventListener('load', checkOffers);



// Bootstrap Carousel Initialization (if not auto-initialized)
// document.addEventListener('DOMContentLoaded', function() {
//   var myCarousel = document.querySelector('#testimonialCarousel')
//   var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 5000, // Change slide every 5 seconds
//     wrap: true
//   })
// });