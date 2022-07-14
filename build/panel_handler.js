import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getFunctions, httpsCallable } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-functions.js';

const app = initializeApp({
    apiKey: "AIzaSyBhwZmZj7YfQrLIr2vfFMy1gc9mbvrQ_10",
    authDomain: "wellesleyadminpanel.firebaseapp.com",
    projectId: "wellesleyadminpanel",
    storageBucket: "wellesleyadminpanel.appspot.com",
    messagingSenderId: "120368094431",
    appId: "1:120368094431:web:6a99cb6500f76460cb9d6a"
});

const functions = getFunctions(app);
const tournamentCheck = httpsCallable(functions, 'tournamentCheck')

document.getElementById("tournament_id").addEventListener("input", function(){
    var textbox = document.getElementById("tournament_id")

    document.getElementById("tournament_start").setAttribute("hidden", "true")
    document.getElementById("already_exists").setAttribute("hidden", "true")

    if(textbox.value.length == 4){
        textbox.disabled = true;
        textbox.readOnly = true;

        tournamentCheck({ code: Number(textbox.value) })
            .then((result) => {
                if(result.data.error){
                    if(result.data.error == "Request failed with status code 404"){
                        document.getElementById("tournament_start").removeAttribute("hidden")
                    } else {
                        console.log(result.data.error)
                    }
                } else {
                    document.getElementById("already_exists").removeAttribute("hidden")

                    textbox.value = ""
                }

                textbox.disabled = false;
                textbox.readOnly = false;
            })
            .catch((error) => {
                console.warn(error)
            });
    } else {
        textbox.disabled = false;
        textbox.readOnly = false;

        document.getElementById("already_exists").setAttribute("hidden", "true")
        document.getElementById("tournament_start").setAttribute("hidden", "true")
    }
})