// data/products.js
const products = [
  { id: 1, name: "Atari 2600", price: 120, category: "consoles", image: "/images/consoles/atari2600.png"},
  { id: 2, name: "Nintendo Entertainment System (NES)", price: 150, category: "consoles", image: "/images/consoles/nes.png"},
  { id: 3, name: "Super Nintendo (SNES)", price: 200, category: "consoles", image: "/images/consoles/snes.png"},
  { id: 4, name: "Nintendo 64", price: 250, category: "consoles", image: "/images/consoles/n64.png"},
  { id: 5, name: "PlayStation 1", price: 220, category: "consoles", image: "/images/consoles/ps1.png"},
  { id: 6, name: "PlayStation 2", price: 250, category: "consoles", image: "/images/consoles/ps2.png"},
  { id: 7, name: "GameCube", price: 200, category: "consoles", image: "/images/consoles/gamecube.png"},
  { id: 8, name: "Xbox", price: 250, category: "consoles", image: "/images/consoles/xbox.png"},

  { id: 9, name: "Game Boy", price: 100, category: "handhelds", image: "/images/handhelds/gameboy.png"},
  { id: 10, name: "Game Boy Advance", price: 120, category: "handhelds", image: "/images/handhelds/gba.png"},
  { id: 11, name: "Nintendo DS", price: 150, category: "handhelds", image: "/images/handhelds/nds.png"},
  { id: 12, name: "PlayStation Portable (PSP)", price: 180, category: "handhelds", image: "/images/handhelds/psp.png"},

  { id: 13, name: "Super Mario 64", price: 30, category: "games", image: "/images/games/super_mario_64.png"},
  { id: 14, name: "Final Fantasy VII", price: 40, category: "games", image: "/images/games/final_fantasy_7.png"},
  { id: 15, name: "The Legend of Zelda: Ocarina of Time", price: 50, category: "games", image: "/images/games/ocarina_of_time.png"},
];

export function getProducts(categoryId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoryId) {
        resolve(products.filter(p => p.category === categoryId));
      } else {
        resolve(products);
      }
    }, 500); // simulate network delay
  });
}
