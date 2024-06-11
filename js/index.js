document.addEventListener("DOMContentLoaded", function() {
    // Profession typing effect
    var professionSpan = document.getElementById("profession");
    var professions = ["Data Scientist", "Web Developer", "Researcher"];
    
    function updateProfession() {
        var randomIndex = Math.floor(Math.random() * professions.length); 
        var randomProfession = professions[randomIndex];
        var i = 0;
        
        function typeWriter() {
            if (i < randomProfession.length) {
                professionSpan.textContent += randomProfession.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        professionSpan.textContent = '';
        typeWriter();
    }
    
    updateProfession();
    setInterval(updateProfession, 2000);

    // Menu toggle
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Navigation link color change on scroll
    const sections = document.querySelectorAll('section');
    const navLinksArray = document.querySelectorAll('nav a');

    function changeNavColor() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinksArray.forEach((link) => link.style.color = '');
        navLinksArray[index].style.color = 'orange';
    }

    changeNavColor();
    window.addEventListener('scroll', changeNavColor);

    // Project navigation
    const prjNavLinks = document.querySelectorAll('.prj-nav a');
    const mlSection = document.getElementById('ml');
    const webDevSection = document.getElementById('web-dev');

    function toggleProjectSection(event) {
        event.preventDefault();
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

    prjNavLinks.forEach(link => link.addEventListener('click', toggleProjectSection));

    prjNavLinks[0].classList.add('active');
    mlSection.classList.add('active');

    // EmailJS form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var name = event.target.name.value;
        var email = event.target.email.value;
        var message = event.target.message.value;

        var templateParams = {
            to_name: 'Shubh Gupta',
            from_name: name,
            reply_to: email,
            message: message
        };

        emailjs.send('service_74i8s4e', 'template_gbg1ljn', templateParams)
            .then(function(response) {
                alert('Message sent successfully!');
                event.target.reset();
            }, function(error) {
                alert('Failed to send message. Please try again later.');
                console.log('Failed to send message:', error);
            });
    });
});
