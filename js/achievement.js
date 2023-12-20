const filterBar = document.getElementById('filter-bar');
const achievementsContainer = document.getElementById('achievements-container');
const imageViewer = document.getElementById('image-viewer');

// Sample achievements data
const achievementsData = [
    { name: 'Achievement 1', category: 'ML' },
    { name: 'Achievement 2', category: 'Web Development' },
    { name: 'Achievement 2', category: 'Web Development' },
    { name: 'Achievement 2', category: 'Web Development' },
    { name: 'Achievement 2', category: 'Web Development' },
    // Add more achievements with different categories
];

function displayFilterCategories() {
    const categories = [...new Set(achievementsData.map(achievement => achievement.category))];
    
    categories.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category;
        categoryButton.addEventListener('click', () => displayAchievements(category));
        filterBar.appendChild(categoryButton);
    });
}

function displayAllAchievements() {
    displayAchievements('all'); // Display all achievements by default
}

function displayAchievements(category) {
    achievementsContainer.innerHTML = '';
    
    achievementsData
        .filter(achievement => category === 'all' || achievement.category === category)
        .forEach(achievement => {
            const achievementItem = document.createElement('div');
            achievementItem.classList.add('achievement-item');
            achievementItem.textContent = achievement.name;

            achievementItem.addEventListener('click', () => showImageOrPdf(achievement));

            achievementsContainer.appendChild(achievementItem);
        });
}

function showImageOrPdf(achievement) {
    // Logic to display the image or PDF in the imageViewer
    // You can use the imageViewer element and load the content dynamically
    // based on the selected achievement.
}
