document.addEventListener('DOMContentLoaded', function () {
    new Vue({
        el: '#app',
        data: {
            selectedCategory: 'all',
            articles: [
                { id: 1, title: 'Machine Learning Competition Winner', description: 'Received first place in the XYZ Machine Learning Challenge.', date: 'January 1, 2023', category: 'ml' },
                { id: 2, title: 'Certificate in AI Specialization', description: 'Completed an AI specialization course from ABC University.', date: 'March 15, 2023', category: 'ai' },
               
            ]
        },
        computed: {
            filteredArticles() {
                if (this.selectedCategory === 'all') {
                    return this.articles;
                } else {
                    return this.articles.filter(article => article.category === this.selectedCategory);
                }
            }
        }
    });
});
