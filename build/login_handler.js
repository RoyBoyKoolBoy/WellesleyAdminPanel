import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBhwZmZj7YfQrLIr2vfFMy1gc9mbvrQ_10",
  authDomain: "wellesleyadminpanel.firebaseapp.com",
  projectId: "wellesleyadminpanel",
  storageBucket: "wellesleyadminpanel.appspot.com",
  messagingSenderId: "120368094431",
  appId: "1:120368094431:web:6a99cb6500f76460cb9d6a"
});

import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

const loginEmailPassword = async () => {
    const loginEmail = document.getElementById("email").value
    const loginPassword = document.getElementById("password").value

    document.getElementById("error").setAttribute("hidden", "true");

    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .catch(error => {
      if(error.code == "auth/wrong-password" || error.code == "auth/invalid-email" || error.code == "auth/user-not-found"){
        document.getElementById("error").removeAttribute("hidden");
        console.log(error.code)
      } else if (error.code == "auth/too-many-requests") {
        document.getElementById("error").removeAttribute("hidden");
        document.getElementById("error").textContent = "Too many requests. Try again later."
      } else {
        document.getElementById("error").removeAttribute("hidden");
        document.getElementById("error").textContent = "Unkown error: "+error.code
      }
    })
}

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        window.location = 'panel.html'
      }
      else {
        // window.location = 'index.html'
      }
    })
  }

document.getElementById("auth").addEventListener("click", loginEmailPassword)

const auth = getAuth(firebaseApp);
monitorAuthState();
