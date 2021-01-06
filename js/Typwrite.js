var i = 0;
var liste_typing = ['Géomaticien','Analyse de données','Développeur Web']
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var j = 0
var activwriter = false

/* pour un mot*/
function typeWriter(phrasetapee) {
    if (i < phrasetapee.length) {
        document.getElementById("demo").innerHTML += phrasetapee.charAt(i);
        i++;
        console.log('writing',i);
        Writetime = setTimeout(function(){typeWriter(phrasetapee)}, speed);
    }
}

/* fonction suppression du mot*/
function typedeleter(phrase) {
    if (i > 0) {
        //console.log('deleting',i);
        document.getElementById("demo").innerHTML = phrase.substring(0, i - 1);
        i--;
        //console.log('mot = ',phrase);
        Deletetime = setTimeout(function(){typedeleter(phrase)}, speed);
    }
}

/* pour la liste */
var j = 0
var activwriter = false
function typeWriterListe() {
    activwriter = true
    if (j> 0 ){
        j--;
        console.log('deleting word',liste_typing[j])
        typedeleter(liste_typing[j])
        j++;
        if (j == liste_typing.length){
            j = 0;
        }
    }
    if (j < liste_typing.length && i == 0) {
        console.log('writing word',liste_typing[j])
        typeWriter(liste_typing[j])
        j++ ;
        console.log('j =', j);
    }
    listetime = setTimeout(typeWriterListe, 2000);
}



/*$(document).ready(function(){
    $("#demo").ready(typeWriterListe);
});*/

function playtype() {
    $(document).ready(function(){
        console.log("PLAY TYPE");
        if (j > 0) {
            document.getElementById("demo").innerHTML = liste_typing[j-1].substring(0, i - 1);
        }
        $("#demo").ready(typeWriterListe);
    });
  }

function pausetype() {
    console.log("STOP TYPE");
    clearTimeout(listetime);
    clearTimeout(Writetime);
    clearTimeout(Deletetime);
    i = 0
    if (j > 0) {
        document.getElementById("demo").innerHTML = liste_typing[j];
    }

}
window.addEventListener('focus', playtype);
window.addEventListener('blur', pausetype);