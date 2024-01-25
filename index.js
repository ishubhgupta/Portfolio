document.addEventListener('DOMContentLoaded', function () {
    // Load project section content
    var projectSectionContainer = document.getElementById('project-section-container');
    var projectSectionURL = 'project-section.html';

    fetch(projectSectionURL)
        .then(response => response.text())
        .then(data => {
            projectSectionContainer.innerHTML = data;
        });
});

function loadContent(option) {
    var dynamicContent = document.getElementById('dynamic-content');
    var contentMap = {
        'home': 'home.html',
        'tech-stack': 'tech-stack.html',
        'projects': 'project-section.html',
        'researchContribution': 'researchContribution.html',
        'intro': 'intro.html',
        'achivement': 'achivement.html',
        'contact': 'contact.html',
        'github': 'github.html',
    };

    var contentURL = contentMap[option];

    if (contentURL) {
        fetch(contentURL)
            .then(response => response.text())
            .then(data => {
                dynamicContent.innerHTML = data;
            });
    } else {
        dynamicContent.innerHTML = ''; // Clear content if no URL is available
    }
}

document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const carouselItems = document.querySelectorAll('.carousel');

    function moveCarousel(direction) {
        const totalItems = carouselItems.length;

        // Hide the current active item
        carouselItems[currentIndex].classList.remove('active');

        if (direction === 'right') {
            currentIndex = (currentIndex + 1) % totalItems;
        } else if (direction === 'left') {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        }

        // Show the new active item
        carouselItems[currentIndex].classList.add('active');
    }

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', function () {
        moveCarousel('left');
    });

    nextBtn.addEventListener('click', function () {
        moveCarousel('right');
    });

    // Show the initial active item
    carouselItems[currentIndex].classList.add('active');
});




//contact

document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('contactButton');
    const contactContent = document.getElementById('contactContent');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateContactButtonVisibility() {
        const githubReposSection = document.getElementById('github-repos');
        const contentSection = document.getElementById('dynamic-content');

        if (isInViewport(githubReposSection) && !isInViewport(contentSection)) {
            contactButton.style.display = 'block';
        } else {
            contactButton.style.display = 'none';
            // Hide the contact content when not in the visible sections
            contactContent.classList.add('hidden');
        }
    }

    window.addEventListener('scroll', updateContactButtonVisibility);
    window.addEventListener('resize', updateContactButtonVisibility);

    // Initial visibility check
    updateContactButtonVisibility();

    // Toggle the contact content visibility on button click
    contactButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the click event from propagating to the document
        contactContent.classList.toggle('hidden');

        if (!contactContent.classList.contains('hidden')) {
            // Show the content
            document.addEventListener('click', hideContactContent);
        } else {
            // Remove the event listener when hiding the content
            document.removeEventListener('click', hideContactContent);
        }
    });

    // Function to hide contact content
    function hideContactContent() {
        contactContent.classList.add('hidden');
        document.removeEventListener('click', hideContactContent);
    }
});
