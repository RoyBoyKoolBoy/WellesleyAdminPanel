import 'dotenv/config'

document.getElementById("tournament_id").addEventListener("input", function(){
    var textbox = document.getElementById("tournament_id")

    if(textbox.value.length == 4){
        textbox.disabled = true;
        textbox.readOnly = true;

        
    } else {
        textbox.disabled = false;
        textbox.readOnly = false;
    }
})