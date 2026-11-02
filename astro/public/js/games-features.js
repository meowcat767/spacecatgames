/*
 * Copyright (c) Starry Systems and Nijika Softworks.
 */

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('gameSearch');
    const sortSelect = document.getElementById('gameSort');
    const randomBtn = document.getElementById('randomGameBtn');
    const gamesGrid = document.getElementById('gamesGrid');
    const gameItems = Array.from(document.querySelectorAll('.game-item'));
    const visibleCountSpan = document.getElementById('visibleCount');
    const totalCountSpan = document.getElementById('totalCount');
    const backToTopBtn = document.getElementById('backToTop');

    // Initialize counts
    updateCounts();

    // Search Functionality
    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();

        gameItems.forEach(item => {
            const title = item.querySelector('p').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });

        updateCounts();
    });

    // Sort Functionality
    sortSelect.addEventListener('change', function (e) {
        const sortType = e.target.value;
        sortGames(sortType);
    });

    function sortGames(type) {
        const currentItems = Array.from(gamesGrid.children);

        currentItems.sort((a, b) => {
            const titleA = a.querySelector('p').textContent.trim();
            const titleB = b.querySelector('p').textContent.trim();

            if (type === 'az') {
                return titleA.localeCompare(titleB);
            } else if (type === 'za') {
                return titleB.localeCompare(titleA);
            } else {
                // Default order (DOM order) - strictly speaking we can't easily revert to "original" 
                // without storing indices, but for now we'll just leave it or maybe random?
                // Actually, let's just re-append in the original order if we stored it, 
                // but since we didn't store original indices, let's just support A-Z and Z-A for now.
                // If 'default' is selected, we might want to just sort by something else or leave as is.
                // For a robust "Default", we should have stored the initial index.
                return a.dataset.originalIndex - b.dataset.originalIndex;
            }
        });

        currentItems.forEach(item => gamesGrid.appendChild(item));
    }

    // Store original indices for "Default" sort
    gameItems.forEach((item, index) => {
        item.dataset.originalIndex = index;
    });


    // Random Game Functionality
    randomBtn.addEventListener('click', function () {
        const visibleItems = gameItems.filter(item => item.style.display !== 'none');
        if (visibleItems.length > 0) {
            const randomIndex = Math.floor(Math.random() * visibleItems.length);
            const randomItem = visibleItems[randomIndex];

            // Scroll to item
            randomItem.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Highlight effect
            randomItem.classList.add('highlight-game');
            setTimeout(() => {
                randomItem.classList.remove('highlight-game');
            }, 2000);
        }
    });

    // Back to Top
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    backToTopBtn.addEventListener('click', function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    function updateCounts() {
        const total = gameItems.length;
        const visible = gameItems.filter(item => item.style.display !== 'none').length;

        totalCountSpan.textContent = total;
        visibleCountSpan.textContent = visible;
    }
});
