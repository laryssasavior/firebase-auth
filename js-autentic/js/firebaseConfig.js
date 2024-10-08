
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
 
// Configuração do Firebase copiada do seu console do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDCVcjp9vLzxebm8HIyAQoE9vFAMaCf6bk",
    authDomain: "login-teste-prof.firebaseapp.com",
    projectId: "login-teste-prof",
    storageBucket: "login-teste-prof.appspot.com",
    messagingSenderId: "894521288786",
    appId: "1:894521288786:web:2c89a44383dd8b613f978b"
  };

  // Inicializa o Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  