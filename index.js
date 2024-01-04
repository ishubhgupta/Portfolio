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
