const games = [
  {
    title: "parkour",
    genre: "Platformer",
    description: "Run across rooftops, jump past traffic, and keep moving through the sunset city.",
    link: "https://parkour-eight-rosy.vercel.app/",
    action: "Open game",
    theme: "theme-parkour",
  },
  {
    title: "fruit drop",
    genre: "Arcade",
    description: "Stack falling fruit, make bigger combos, and try not to overflow the box.",
    link: "https://fruit-drop-lac.vercel.app/",
    action: "Open game",
    theme: "theme-fruit",
  },
  {
    title: "Size of Life",
    genre: "Interactive",
    description: "Zoom through living things and compare scale in a playful visual way.",
    link: "#",
    action: "Open game",
    theme: "theme-garden",
  },
];

const gamesGrid = document.getElementById("games-grid");

games.forEach((game) => {
  const card = document.createElement("a");
  card.className = `game-card ${game.theme}`;
  card.href = game.link;
  card.setAttribute("aria-label", `Open ${game.title}`);

  card.innerHTML = `
    <div class="card-top">
      <span class="tag">${game.genre}</span>
      <span class="arrow" aria-hidden="true">↗</span>
    </div>
    <div>
      <h3>${game.title}</h3>
      <p>${game.description}</p>
    </div>
    <div class="card-footer">
      <span>${game.action}</span>
      <span class="status">Click to open</span>
    </div>
  `;

  gamesGrid.appendChild(card);
});
