let btn = document.getElementById("btn");
let result = document.getElementById("result");
function headsOrTails(){
  let Num = Math.floor(Math.random() * 2); // Cette fonction génère un nombre aléatoire entre 0 et 1 en utilisant Math.random() multiplié par 2 et arrondi à l'entier inférieur avec Math.floor(). Si le nombre généré est égal à 0, la fonction renvoie la chaîne de caractères "Heads". Sinon, elle renvoie la chaîne de caractères "Tails".
  if (Num === 0) {
    return "Heads";
  } else {
    return "Tails";
  }
}
 function mainClick (){
   let ext = headsOrTails();
   result.textContent = ext;
   // La fonction mainClick est définie pour être appelée lorsqu'un clic est détecté sur le bouton (btn). À l'intérieur de cette fonction, la variable ext est définie en appelant la fonction headsOrTails, ce qui lui attribue soit la valeur "Heads" soit la valeur "Tails". Ensuite, le contenu de l'élément avec l'ID "result" est mis à jour avec la valeur de ext, ce qui affiche le résultat du tirage au sort à l'écran.

   console.log(ext);
 }


btn.addEventListener('click', mainClick);
//  ajoute un écouteur d'événements de clic sur le bouton (btn). Lorsque le bouton est cliqué, la fonction mainClick est appelée.

// En résumé, lorsque l'on clique sur le bouton, la fonction mainClick est déclenchée. Elle appelle la fonction headsOrTails pour obtenir le résultat d'un tirage aléatoire entre "Heads" et "Tails". Ce résultat est ensuite affiché dans l'élément avec l'ID "result" et est également imprimé dans la console à l'aide de console.log(ext).