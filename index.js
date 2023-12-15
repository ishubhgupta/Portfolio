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