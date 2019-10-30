/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
//
var tailleString = function (texte) {
    return result = texte.length;
}

var remplaceECar = function (texte) {
    return result = texte.replace("e"," ");
}

var concatString = function (texte1, texte2) {
    return result = texte1 + texte2;
}

var afficherCar5 = function (texte) {
    return texte.substring(4,5);
}


var afficher9Car = function (texte) {
    return texte.substring(0,9);
}


var majusculeString = function (texte) {
  return result = texte.toUpperCase();
}

var minusculeString = function (texte) {
  return result = texte.toLowerCase();
}

var SupprEspaceString = function (texte) {
    return result = texte.trim();
}

var IsString = function (texte) {
    return (typeof texte === "string");
}

var AfficherExtensionString = function (texte) {
    return texte.substring(texte.lastIndexOf('.') + 1);
}

var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
}

var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */

var calculPuissance = function (x, y) {
    return result = Math.pow(x, y) ;
}

var valeurAbsolue = function (nombre) {
    return result = Math.abs(nombre) ;
}

var valeurAbsolueArray = function (array) {
  for (let i = 0; i < array.length; i++){
    array[i] = Math.abs(array[i]);
  }
  return array ;
}

var sufaceCercle = function (rayon) {
  return Math.round(Math.PI *(rayon *rayon));
}

var hypothenuse = function (ab, ac) {
    return result = Math.hypot(ab ,ac) ;
}
var calculIMC = function (poids, taille) {
    return Math.round(poids / (taille * taille)*100)/100;
}
