document.addEventListener("DOMContentLoaded", function () {
  // Profession typing effect
  var professionSpan = document.getElementById("profession");
  var professions = ["Data Scientist", "Web Developer", "Researcher"];
  var lastIndex = -1;
  var typingInterval;
  var updateInterval;

  function clearIntervals() {
    clearTimeout(typingInterval);
    clearTimeout(updateInterval);
  }

  function updateProfession() {
    clearIntervals();

    var randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * professions.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;
    var randomProfession = professions[randomIndex];
    var i = 0;

    function typeWriter() {
      if (i < randomProfession.length) {
        professionSpan.textContent += randomProfession.charAt(i);
        i++;
        typingInterval = setTimeout(typeWriter, 100);
      } else {
        updateInterval = setTimeout(updateProfession, 2000);
      }
    }

    professionSpan.textContent = "";
    typeWriter();
  }

  updateProfession();

  // Brief intro typing effect
  const briefIntro = document.getElementById("brief-intro");
  const introText =
    "I turn complex problems into elegant solutions through code. Passionate about AI and creating impactful applications.";
  let introIndex = 0;

  function typeIntro() {
    if (introIndex < introText.length) {
      briefIntro.textContent += introText.charAt(introIndex);
      introIndex++;
      setTimeout(typeIntro, 50);
    }
  }

  setTimeout(typeIntro, 1000);

  // Navigation functionality
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  // Menu toggle
  menuIcon?.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
      navLinks.classList.remove("open");
    }
  });

  // Update navigation on scroll
  function updateNavigation() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const currentId = section.getAttribute("id");
        navLinksItems.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentId}`
          );
        });
      }
    });

    // Handle resume button visibility
    const headerResumeBtn = document.querySelector(".header-resume-btn");
    const homeSec = document.getElementById("home");
    const aboutSec = document.getElementById("about-me");

    if (headerResumeBtn) {
      const homeBottom = homeSec.offsetTop + homeSec.offsetHeight;
      const aboutBottom = aboutSec.offsetTop + aboutSec.offsetHeight;

      headerResumeBtn.classList.toggle(
        "hidden",
        !(
          scrollPosition >= homeBottom && scrollPosition <= aboutSec.offsetTop
        ) && !(scrollPosition >= aboutBottom)
      );
    }
  }

  window.addEventListener("scroll", updateNavigation);
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navLinks.classList.remove("open");
    }
  });

  // Projects filtering
  /*
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 300);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Projects section enhancements
  const projectsGrid = document.querySelector('.projects-grid');
  const paginationDots = document.querySelectorAll('.pagination-dot');
  let currentPage = 0;

  // Update pagination dots
  function updatePagination() {
    paginationDots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentPage);
    });
  }

  // Handle pagination click
  paginationDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentPage = index;
      const scrollPosition = index * projectsGrid.offsetWidth;
      projectsGrid.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      updatePagination();
    });
  });

  // Handle scroll in projects grid
  projectsGrid.addEventListener('scroll', () => {
    const newPage = Math.round(projectsGrid.scrollLeft / projectsGrid.offsetWidth);
    if (newPage !== currentPage) {
      currentPage = newPage;
      updatePagination();
    }
  });

  // Projects scroll buttons functionality
  const scrollLeftBtn = document.querySelector('.scroll-left');
  const scrollRightBtn = document.querySelector('.scroll-right');

  function updateScrollButtons() {
    if (projectsGrid) {
      // Hide left button if at start
      scrollLeftBtn.style.opacity = projectsGrid.scrollLeft <= 0 ? "0" : "1";
      scrollLeftBtn.style.pointerEvents = projectsGrid.scrollLeft <= 0 ? "none" : "all";

      // Hide right button if at end
      const maxScroll = projectsGrid.scrollWidth - projectsGrid.clientWidth;
      scrollRightBtn.style.opacity = Math.ceil(projectsGrid.scrollLeft) >= maxScroll ? "0" : "1";
      scrollRightBtn.style.pointerEvents = Math.ceil(projectsGrid.scrollLeft) >= maxScroll ? "none" : "all";
    }
  }

  if (scrollLeftBtn && scrollRightBtn && projectsGrid) {
    // Initial check
    updateScrollButtons();

    // Update on scroll
    projectsGrid.addEventListener('scroll', updateScrollButtons);

    // Scroll buttons click handlers
    scrollLeftBtn.addEventListener('click', () => {
      projectsGrid.scrollBy({
        left: -projectsGrid.offsetWidth / 2,
        behavior: 'smooth'
      });
    });

    scrollRightBtn.addEventListener('click', () => {
      projectsGrid.scrollBy({
        left: projectsGrid.offsetWidth / 2,
        behavior: 'smooth'
      });
    });

    // Update on window resize
    window.addEventListener('resize', updateScrollButtons);
  }

  // Certificate lazy loading and load more
  const certificateCards = document.querySelectorAll('.certificate-card');
  const loadMoreBtn = document.querySelector('.load-more');
  const cardsPerLoad = 6;
  let currentlyShown = cardsPerLoad;

  function updateCertificateVisibility() {
    certificateCards.forEach((card, index) => {
      const show = index < currentlyShown;
      card.style.display = show ? 'block' : 'none';
      if (show) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });

    if (loadMoreBtn && currentlyShown >= certificateCards.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      currentlyShown += cardsPerLoad;
      updateCertificateVisibility();
    });
  }

  // Initialize certificates
  updateCertificateVisibility();
  */

  // Skills chart
  var ctx = document.getElementById("skillsChart").getContext("2d");
  var skillsChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP",
        "MySQL",
        "Java",
        "C++",
        "Python",
        "NumPy",
        "Sklearn",
        "Pandas",
        "Matplotlib",
        "Keras",
      ],
      datasets: [
        {
          label: "Skill Level",
          data: [90, 80, 50, 50, 60, 30, 70, 90, 80, 90, 80, 70, 90],
          backgroundColor: "rgba(80, 200, 120, 0.2)",
          borderColor: "#50c878",
          borderWidth: 2,
          pointBackgroundColor: "#61dafb",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "#50c878",
        },
      ],
    },
    options: {
      scales: {
        r: {
          angleLines: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          pointLabels: {
            color: "#fff",
            font: {
              size: 12,
            },
          },
          ticks: {
            beginAtZero: true,
            max: 100,
            stepSize: 20,
            color: "#888",
            backdropColor: "transparent",
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      animation: {
        duration: 2000,
        easing: "easeInOutQuart",
      },
    },
  });

  // Contact form
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const button = e.target.querySelector("button");
      button.classList.add("clicked");

      try {
        const response = await emailjs.send(
          "service_74i8s4e",
          "template_gbg1ljn",
          {
            from_name: e.target.name.value,
            message: e.target.message.value,
            email_id: e.target.email.value,
          }
        );

        showAcknowledgment("Message sent successfully!", true);
        e.target.reset();
      } catch (error) {
        console.error(error);
        showAcknowledgment(
          "Failed to send message. Please try again later.",
          false
        );
      } finally {
        setTimeout(() => button.classList.remove("clicked"), 300);
      }
    });
  }

  // Acknowledgment message
  function showAcknowledgment(message, isSuccess) {
    const ack = document.getElementById("acknowledgment");
    if (ack) {
      ack.innerText = message;
      ack.className = `acknowledgment show ${isSuccess ? "success" : "error"}`;

      setTimeout(() => {
        ack.classList.remove("show");
        setTimeout(() => (ack.className = "acknowledgment"), 500);
      }, 5000);
    }
  }

  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Initialize everything
  updateNavigation();

  // Force animation refresh for profile image
  function refreshAnimation() {
    const profileFrame = document.querySelector(".profile-frame");
    const profileImage = document.querySelector(".profile-image");

    if (profileFrame && profileImage) {
      // Force a repaint by temporarily removing the animation
      profileFrame.style.animation = "none";
      profileImage.style.animation = "none";

      // Trigger reflow
      void profileFrame.offsetWidth;
      void profileImage.offsetWidth;

      // Restore animation
      profileFrame.style.animation = "borderAnimation 8s ease-in-out infinite";
      profileImage.style.animation = "borderAnimation 8s ease-in-out infinite";
    }
  }

  // Call it once the DOM is loaded
  refreshAnimation();

  // Also refresh on resize to ensure it works when switching orientations
  window.addEventListener("resize", refreshAnimation);
});

// Scroll indicator functionality
const scrollIndicator = document.querySelector(".scroll-indicator");
const aboutSection = document.getElementById("about-me");

scrollIndicator.addEventListener("click", function () {
  aboutSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

// Add mobile navigation functionality
function initMobileNav() {
  const mobileLinks = document.querySelectorAll(".mobile-nav a");
  const sections = document.querySelectorAll("section");

  // Update active section based on scroll position
  function updateActiveSection() {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const currentId = section.getAttribute("id");
        mobileLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  // Add smooth scroll for mobile navigation
  mobileLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Update active section on scroll
  window.addEventListener("scroll", updateActiveSection);
  // Initial check for active section
  updateActiveSection();
}

// Initialize mobile nav on page load
document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
});

// Handle resize events
window.addEventListener("resize", function () {
  if (window.innerWidth <= 768) {
    initMobileNav();
  }
});

// Mobile Project Modal functionality
if (window.innerWidth <= 768) {
  const modal = document.querySelector(".mobile-project-modal");
  const closeModal = document.querySelector(".close-modal");
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3").textContent;
      const description = card.querySelector("p").textContent;
      const link = card.querySelector(".project-links a").href;
      const techStack = Array.from(
        card.querySelectorAll(".project-tech-stack span")
      ).map((span) => span.textContent);

      // Update modal content
      modal.querySelector(".modal-title").textContent = title;
      modal.querySelector(".project-link a").href = link;
      modal.querySelector(".modal-description").textContent = description;

      const techStackContainer = modal.querySelector(".modal-tech-stack");
      techStackContainer.innerHTML = "";
      techStack.forEach((tech) => {
        const span = document.createElement("span");
        span.textContent = tech;
        techStackContainer.appendChild(span);
      });

      // Add project images to carousel (example)
      const carouselContainer = modal.querySelector(".carousel-container");
      carouselContainer.innerHTML = "";
      // Add your project images here
      const images = [
        card.querySelector(".project-image img").src,
        // Add more image URLs as needed
      ];

      images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.loading = "lazy";
        carouselContainer.appendChild(img);
      });

      // Show modal
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Handle carousel navigation
  const carouselPrev = modal.querySelector(".carousel-prev");
  const carouselNext = modal.querySelector(".carousel-next");
  const carouselContainer = modal.querySelector(".carousel-container");

  carouselPrev.addEventListener("click", () => {
    carouselContainer.scrollBy({
      left: -290,
      behavior: "smooth",
    });
  });

  carouselNext.addEventListener("click", () => {
    carouselContainer.scrollBy({
      left: 290,
      behavior: "smooth",
    });
  });
}

// Initialize mobile features if on mobile device
if (window.innerWidth <= 768) {
  initMobileNav();
}

// Mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links a");

  // Toggle menu on click
  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      // Change icon based on menu state
      const icon = menuIcon.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Close menu when clicking on a link
  navLinksItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
      const icon = menuIcon.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

  // Add delay to each nav item for animation
  navLinksItems.forEach((link, index) => {
    link.style.transitionDelay = index * 0.1 + "s";
  });
});

// Add resize event handler to the existing window resize event listener
// This should already be in your existing code, but ensure it includes this functionality
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    const navLinks = document.getElementById("nav-links");
    const menuIcon = document.getElementById("menu-icon");
    if (navLinks && menuIcon) {
      navLinks.classList.remove("active");
      const icon = menuIcon.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    }
  }
});
