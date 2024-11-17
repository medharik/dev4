//
let age=20.5;
let majeur=  age>20;//boolean
let prenom="ali";

console.log('condition 1 ',1>2,3>0, typeof majeur, typeof age, typeof prenom);
//falsy (equivalent de false) , truthy (equivalent de true)
//falsy : 0, "", null, undefined, NaN, false,[],{}
let test1;
if (test1) {
    console.log('test 1 ok',test1);
} else {
    console.log('test 1 ko',test1);
    
}

//Operateur 1 : coalescance (nullish coalescing)
//si la valeur est null ou undefined, on prend la valeur de droite
let qte=2;
qte = (qte ?? 0) +1;
console.log('la qte est ',qte);
// operateur 2 : || (ou)
let prixht =false ;
const TVA=20;
let  prixTc= (prixht || 1)*(1+TVA/100);
console.log("prixTc ",prixTc);
// operateur &&
let age2= 20;
let a=true && false && "test";
console.log(a);
let connected =true;
let  user=connected && "user connected"; 
// if (connected) {
//     user="user Connected ";
// }
console.log(user);