//variable  global
//var  phone;//en javscript , uen variable declaree sans valeur se voit attribuer la valeur undefined
 
console.log(phone);//undefined
let age=20;
var prenom="ali";
//constante 
const TVA=20;
console.log(age,prenom,TVA);
// scope : portee (visibilite de la variable )
//bloc 1 
{

    let prix=100;// variable local dans le bloc 1 (scope = bloc 1)
    const MARQUE='HP';//constante  local dans le bloc 1 (scope = bloc 1)
}

//console.log(prix)// prix is note defined car le prix n'est visible que dans le bloc 1
// HOISTING : LA REMONTEE DES VARIABLES 
//bloc 2
{
 var    phone='iphone 15';//var fait le  hoinsting 
    console.log(phone);
let test;
console.log('test est ',null==undefined,"1"==1,"1"===1,null===undefined);//egqlite lache == : "1"==1
}


console.log(phone)