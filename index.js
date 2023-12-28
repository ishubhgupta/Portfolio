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
    const nextButton = document.querySelector('.next-screen');
    const prevButton = document.querySelector('.prev-screen');
    const walkthroughScreens = document.querySelector('.screens');

    let currentScreenIndex = 0;
    const totalScreens = document.querySelectorAll('.screen').length;

    // Function to show/hide screens
    function updateScreens() {
        const screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {
            if (index === currentScreenIndex) {
                screen.classList.add('active');
            } else {
                screen.classList.remove('active');
            }
        });

        // Enable/disable prev and next buttons based on the current screen
        prevButton.disabled = currentScreenIndex === 0;
        nextButton.disabled = currentScreenIndex === totalScreens - 1;
    }

    // Event listener for the Next button
    nextButton.addEventListener('click', function () {
        if (currentScreenIndex < totalScreens - 1) {
            currentScreenIndex++;
            updateScreens();
        }
    });

    // Event listener for the Prev button
    prevButton.addEventListener('click', function () {
        if (currentScreenIndex > 0) {
            currentScreenIndex--;
            updateScreens();
        }
    });

    // Initial update of screens
    updateScreens();
});
