document.addEventListener("DOMContentLoaded", function() {
    var professionSpan = document.getElementById("profession");
    var professions = ["Data Scientist", "Web Developer", "Researcher"];
    var professionText = "Data Scientist, Web Developer, Researcher"; // Profession text
    
    function updateProfession() {
        var randomIndex = Math.floor(Math.random() * professions.length); 
        var randomProfession = professions[randomIndex];
        var i = 0;
        
        // Function to simulate typing effect for profession text
        function typeWriter() {
            if (i < randomProfession.length) {
                professionSpan.textContent += randomProfession.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // Adjust typing speed (milliseconds)
            }
        }
        
        // Clear profession text before typing new profession
        professionSpan.textContent = '';
        
        // Start typing effect for the new profession
        typeWriter();
    }
    
    // Initial update
    updateProfession();
    
    // Update profession text every 2 seconds (2000 milliseconds)
    setInterval(updateProfession, 2000);
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    function changeNavColor() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.style.color = '');
        navLinks[index].style.color = 'orange';
    }

    changeNavColor(); // Initial check
    window.addEventListener('scroll', changeNavColor);
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const prjNavLinks = document.querySelectorAll('.prj-nav a');
    const mlSection = document.getElementById('ml');
    const webDevSection = document.getElementById('web-dev');

    // Function to change nav color on scroll
    function changeNavColor() {
        let index = sections.length;
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        navLinks.forEach((link) => link.style.color = '');
        navLinks[index].style.color = 'orange';
    }

    // Initial nav color check and scroll event listener
    changeNavColor();
    window.addEventListener('scroll', changeNavColor);

    // Function to show/hide project sections
    function toggleProjectSection(event) {
        const targetId = event.target.getAttribute('href').substring(1);
        if (targetId === 'ml') {
            mlSection.classList.add('active');
            webDevSection.classList.remove('active');
        } else if (targetId === 'web-dev') {
            webDevSection.classList.add('active');
            mlSection.classList.remove('active');
        }
        prjNavLinks.forEach(link => link.classList.remove('active'));
        event.target.classList.add('active');
    }

    // Event listeners for project nav links
    prjNavLinks.forEach(link => link.addEventListener('click', (event) => {
        event.preventDefault();
        toggleProjectSection(event);
    }));

    // Initial display setup
    prjNavLinks[0].classList.add('active');
    mlSection.classList.add('active');
});
