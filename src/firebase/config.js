// src/firebase/config.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  query,
  where
} from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwK3Q7LwGJRC-zxlpUabjnxoORiuSZQ4E",
  authDomain: "retrostore-7dc08.firebaseapp.com",
  projectId: "retrostore-7dc08",
  storageBucket: "retrostore-7dc08.firebasestorage.app",
  messagingSenderId: "1091558308133",
  appId: "1:1091558308133:web:d6b519a662dba1e37bc2cc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// helpers
export async function fetchAllProducts() {
  const col = collection(db, "products");
  const snapshot = await getDocs(col);
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function fetchProductById(id) {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

export async function fetchProductsByCategory(category) {
  const col = collection(db, "products");
  const q = query(col, where("category", "==", category));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function createOrder(order) {
  const ordersCol = collection(db, "orders");
  const result = await addDoc(ordersCol, order); // returns DocumentReference
  return result.id;
}

export { db }; 