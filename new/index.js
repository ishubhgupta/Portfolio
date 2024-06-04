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
