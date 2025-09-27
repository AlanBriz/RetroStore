export const products = [
  {
    id: 1,
    name: "Super Nintendo",
    category: "consoles",
    price: 200,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/SNES-Mod1-Console-Set.png",
    description: "Classic 16-bit console from Nintendo, perfect for retro gaming enthusiasts."
  },
  {
    id: 2,
    name: "Game Boy Color",
    category: "handhelds",
    price: 120,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Game_Boy_Color.png",
    description: "Portable 8-bit gaming on the go with a color screen."
  },
  {
    id: 3,
    name: "Nintendo 64",
    category: "consoles",
    price: 250,
    image: "https://upload.wikimedia.org/wikipedia/commons/7/71/N64-Console-Set.png",
    description: "64-bit console known for iconic 3D games like Mario 64."
  },
  {
    id: 4,
    name: "Sega Genesis",
    category: "consoles",
    price: 180,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Sega-Genesis-MK-2-Console-Set.png",
    description: "Classic 16-bit Sega console, famous for Sonic the Hedgehog."
  },
  {
    id: 5,
    name: "Pokémon Red",
    category: "games",
    price: 50,
    image: "https://upload.wikimedia.org/wikipedia/en/5/53/Pokemon_Red_Version_Cover_Art.png",
    description: "Start your Pokémon journey with the first-generation classic."
  },
  {
    id: 6,
    name: "Legend of Zelda: Ocarina of Time",
    category: "games",
    price: 50,
    image: "https://upload.wikimedia.org/wikipedia/en/9/9d/Ocarina_of_Time.jpg",
    description: "One of the greatest adventure games ever released."
  },
  {
    id: 7,
    name: "Game Boy Advance",
    category: "handhelds",
    price: 130,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Game_Boy_Advance_Front.png",
    description: "16-bit handheld console with a wide library of games."
  },
  {
    id: 8,
    name: "PlayStation 1",
    category: "consoles",
    price: 220,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/PSX-Console-wController.jpg",
    description: "Sony's first console that launched the PlayStation legacy."
  },
  {
    id: 9,
    name: "Tetris",
    category: "games",
    price: 25,
    image: "https://upload.wikimedia.org/wikipedia/en/7/7e/Tetris_gameboy.jpg",
    description: "The timeless puzzle game that defined portable gaming."
  },
  {
    id: 10,
    name: "Game Boy Pocket",
    category: "handhelds",
    price: 100,
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Game_Boy_Pocket_Front.jpg",
    description: "Compact and lightweight Game Boy for retro portability."
  }
];

export const getProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category) {
        resolve(products.filter(p => p.category === category));
      } else {
        resolve(products);
      }
    }, 500);
  });
};
