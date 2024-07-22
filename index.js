// Smooth scrolling initialization
document.addEventListener("DOMContentLoaded", () => {
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 100,
        speedAsDuration: true
    });

    // Function to fetch games data from API
    function fetchGames() {
        fetch("https://api.myjson.online/v1/records/0a23cbb5-14bb-4a39-9ce7-d8194d6c5672")
            .then(response => response.json())
            .then(data => {
                displayGames(data.games);
            })
            .catch(error => {
                console.error("Error fetching games data:", error);
            });
    }

    // Function to display games in the HTML
    function displayGames(games) {
        const gamesList = document.getElementById("games-list");
        gamesList.innerHTML = "";

        games.forEach(game => {
            const gameItem = document.createElement("div");
            gameItem.className = "game-item";
            
            gameItem.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <h2>${game.title}</h2>
                <p>${game.description}</p>
                <p class="price">$${game.price.toFixed(2)}</p>
            `;
            gamesList.appendChild(gameItem);
        });
    }

    // Fetch games on page load
    fetchGames();
});
