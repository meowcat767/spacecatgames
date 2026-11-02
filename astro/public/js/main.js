/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

// Make require usage safe in browsers (avoid ReferenceError when `require` is not defined)
let owo = null;
if (typeof require !== 'undefined') {
  try {
    owo = require("@zuzak/owo");
    console.log("Loaded Packages from Yarn!");
  } catch (err) {
    console.warn("Could not require @zuzak/owo:", err);
  }
} else {
  console.log("`require` is not available in this environment; skipping @zuzak/owo import.");
}
console.log(
  "Space Cat Games (C) Starry Systems. Origially created by Team Astrocat."
);
console.log("Loaded js/main.js");
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Add active class to current navigation item
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".topnav a");
  console.log("navLinks Loaded!");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (
      linkHref === currentPage ||
      (currentPage === "" && linkHref === "index.html")
    ) {
      link.classList.add("active");
      console.log("Active link: " + linkHref);
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Lazy loading for images (basic implementation)
  if ("IntersectionObserver" in window) {
    const lazyImages = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
          console.log("Lazy loaded image: " + img.src);
        }
      });
    });

    lazyImages.forEach((img) => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    document.querySelectorAll("img[data-src]").forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    });
  }

  // Responsive navigation toggle (for mobile)
  const createMobileNavToggle = () => {
    if (window.innerWidth <= 768) {
      // Only create the toggle if it doesn't exist and we're on mobile
      if (!document.querySelector(".nav-toggle")) {
        const nav = document.querySelector(".topnav");
        const toggle = document.createElement("button");
        toggle.classList.add("nav-toggle");
        toggle.innerHTML = "☰";
        toggle.style.cssText = `
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    z-index: 101;
                    display: none;
                `;

        toggle.addEventListener("click", () => {
          nav.classList.toggle("nav-open");
        });

        document.body.appendChild(toggle);
        console.log("Mobile nav toggle created!");
      }
    }
  };

  // Check if we need to create a responsive toggle
  createMobileNavToggle();
  console.log("Responsive nav toggle check complete!");

  // Handle window resize
  window.addEventListener("resize", () => {
    createMobileNavToggle();
    console.log("Window resized, checked for mobile nav toggle!");
  });
});
