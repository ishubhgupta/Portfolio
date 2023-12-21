document.addEventListener('DOMContentLoaded', function () {
    const categoryDropdown = document.getElementById('categoryDropdown');
    const achievementsContainer = document.querySelector('.achievements');
    
    categoryDropdown.addEventListener('change', function () {
        filterAchievements(this.value);
    });

    function filterAchievements(category) {
        const articles = document.querySelectorAll('.achievements article');

        articles.forEach(article => {
            const articleCategory = article.classList[1]; // Assuming the category class is the second class in the list
            if (category === 'all' || articleCategory === category) {
                article.style.display = 'block';
            } else {
                article.style.display = 'none';
            }
        });
    }

    // Initialize with 'All' selected
    filterAchievements('all');
});
