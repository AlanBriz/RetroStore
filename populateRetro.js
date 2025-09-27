// populateRetro.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDwK3Q7LwGJRC-zxlpUabjnxoORiuSZQ4E",
  authDomain: "retrostore-7dc08.firebaseapp.com",
  projectId: "retrostore-7dc08",
  storageBucket: "retrostore-7dc08.firebasestorage.app",
  messagingSenderId: "1091558308133",
  appId: "1:1091558308133:web:d6b519a662dba1e37bc2cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 3️⃣ Sample products
const products = [
  // Consoles
  {
    name: "Super Nintendo",
    category: "consoles",
    price: 200,
    stock: 5,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/SNES-Console-Set.jpg",
  },
  {
    name: "Sega Genesis",
    category: "consoles",
    price: 180,
    stock: 4,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Sega-Genesis-Model-1-6-button-controller.jpg",
  },
  {
    name: "Nintendo 64",
    category: "consoles",
    price: 220,
    stock: 3,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Nintendo_64-Console-Set.jpg",
  },
  // Handhelds
  {
    name: "Game Boy",
    category: "handhelds",
    price: 100,
    stock: 10,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Game_Boy_Original.jpg",
  },
  {
    name: "Game Boy Color",
    category: "handhelds",
    price: 120,
    stock: 8,
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Game_Boy_Color_Transparent_Green.png",
  },
  {
    name: "Game Boy Advance",
    category: "handhelds",
    price: 130,
    stock: 6,
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Game_Boy_Advance_SP_Front.jpg",
  },
  // Games
  {
    name: "The Legend of Zelda: A Link to the Past",
    category: "games",
    price: 50,
    stock: 20,
    image: "https://upload.wikimedia.org/wikipedia/en/4/46/ALttPboxart.jpg",
  },
  {
    name: "Super Mario World",
    category: "games",
    price: 45,
    stock: 18,
    image: "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_World_Box_Art.jpg",
  },
  {
    name: "Sonic the Hedgehog",
    category: "games",
    price: 40,
    stock: 15,
    image: "https://upload.wikimedia.org/wikipedia/en/6/6e/Sonic_the_Hedgehog_MD_Box_Art.jpg",
  },
  {
    name: "Pokémon Red",
    category: "games",
    price: 55,
    stock: 12,
    image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Pokemon_Red_Coverart.png",
  },
];

// Populate Firestore
async function populate() {
  try {
    for (const product of products) {
      await addDoc(collection(db, "products"), product);
      console.log("Added:", product.name);
    }
    console.log("All products added");
  } catch (err) {
    console.error("Error adding products:", err);
  }
}

populate();
