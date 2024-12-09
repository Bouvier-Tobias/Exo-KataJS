function countBs(paragraphe, lettre) {
  let compteur = 0;
  for (let i = 0; i < paragraphe.length; i++) {
    if (paragraphe[i] === lettre) {
      compteur++;
    }
  }
  return compteur;
}
function countChar(paragraphe, lettre) {
  let compteur = 0;
  for (let i = 0; i < paragraphe.length; i++) {
    if (paragraphe[i] === lettre) {
      compteur++;
    }
  }
  return compteur;
}

let paraCountBs = "BBS";
let lettreCountBs = "B";
let paraCounChar = "kakkerlak";
let lettreCountChar = "k";
console.log(countBs(paraCountBs, lettreCountBs));
console.log(countChar(paraCounChar, lettreCountChar));
