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

  // Menu toggle
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");
  const navLinksItems = document.querySelectorAll(".nav-links a");

  menuIcon.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
      navLinks.classList.remove("open");
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      navLinks.classList.remove("open");
    }
  });

  navLinksItems.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  });

  // Navigation link color change on scroll
  const sections = document.querySelectorAll("section");
  const navLinksArray = document.querySelectorAll("nav a");

  function changeNavColor() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinksArray.forEach((link) => (link.style.color = ""));
    navLinksArray[index].style.color = "#50C878";
  }

  changeNavColor();
  window.addEventListener("scroll", changeNavColor);

  // Handle header resume button visibility
  const headerResumeBtn = document.querySelector(".header-resume-btn");
  const homeSec = document.getElementById("home");
  const aboutSec = document.getElementById("about-me");

  function toggleResumeButtonVisibility() {
    const scrollPosition = window.scrollY + 50; // Add offset for header
    const homeBottom = homeSec.offsetTop + homeSec.offsetHeight;
    const aboutBottom = aboutSec.offsetTop + aboutSec.offsetHeight;

    if (
      (scrollPosition >= homeBottom && scrollPosition <= aboutSec.offsetTop) ||
      scrollPosition >= aboutBottom
    ) {
      headerResumeBtn.classList.remove("hidden");
    } else {
      headerResumeBtn.classList.add("hidden");
    }
  }

  window.addEventListener("scroll", toggleResumeButtonVisibility);
  toggleResumeButtonVisibility(); // Call initially to set correct state

  // Project navigation
  const prjNavLinks = document.querySelectorAll(".prj-nav a");
  const mlSection = document.getElementById("ml");
  const webDevSection = document.getElementById("web-dev");

  function toggleProjectSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);

    if (targetId === "ml") {
      mlSection.classList.add("active");
      webDevSection.classList.remove("active");
    } else if (targetId === "web-dev") {
      webDevSection.classList.add("active");
      mlSection.classList.remove("active");
    }

    prjNavLinks.forEach((link) => link.classList.remove("active"));
    event.target.classList.add("active");
  }

  prjNavLinks.forEach((link) =>
    link.addEventListener("click", toggleProjectSection)
  );

  prjNavLinks[0].classList.add("active");
  mlSection.classList.add("active");

  // EmailJS form submission
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const button = event.target.querySelector('button');
      
      // Add click animation
      button.classList.add('clicked');
      setTimeout(() => button.classList.remove('clicked'), 300);

      var name = event.target.name.value;
      var email = event.target.email.value;
      var message = event.target.message.value;

      emailjs
        .send("service_74i8s4e", "template_gbg1ljn", {
          from_name: name,
          message: message,
          email_id: email,
        })
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            showAcknowledgment("Message sent successfully!", true);
            event.target.reset();
          },
          function (error) {
            console.log("FAILED...", error);
            showAcknowledgment("Failed to send message. Please try again later.", false);
          }
        );
    });

  // Add animation to acknowledgment message
  function showAcknowledgment(message, isSuccess = true) {
    const ack = document.getElementById('acknowledgment');
    ack.innerText = message;
    ack.classList.add('show');
    ack.classList.add(isSuccess ? 'success' : 'error');
    
    setTimeout(() => {
        ack.classList.remove('show');
        setTimeout(() => {
            ack.classList.remove('success', 'error');
        }, 500);
    }, 5000);
  }

  // Radar chart
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
        "HTML5",
      ], // Duplicate HTML5 at the end
      datasets: [
        {
          label: "Skill Level",
          data: [10, 8, 5, 5, 6, 3, 10, 10, 8, 10, 8, 7, 9, 10], // Duplicate the first skill level at the end
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scale: {
        ticks: {
          beginAtZero: true,
          max: 10, // Changed to match the provided skill levels
        },
      },
    },
  });
});
