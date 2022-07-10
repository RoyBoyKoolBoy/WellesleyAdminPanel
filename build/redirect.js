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

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        // window.location = 'panel.html'
      }
      else {
        window.location = 'index.html'
      }
    })
  }

const auth = getAuth(firebaseApp);
monitorAuthState();
