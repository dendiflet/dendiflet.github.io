setTimeout(function(){ 

var nom = prompt("c'est quoi ton blase?");


if ( nom == null ) {
	nom ="ROBERT", alert("je vais donc t'appeler ROBERT");
}

var question = ' ,veux tu te faire rick roller? cliquez sur "OK" si c\'est le cas.';
var questionnom = nom + question

if (confirm(questionnom)) {
    alert("c'est parti !"); location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";

}

else {
    alert("ok, pas grave (j'espère que tu bloque les fenetre pop-up)"); window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank');
  win.focus();
}

 }, 3000);
