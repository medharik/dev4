let k=10;//variable global (scope global = portee global= visibilite global) 
// console.log('x',x);
    console.log("salut ");
let d;//declaration de la variable d (sans initialisation donc d=undefined affecte automatiquement par js)
    console.log('d',d);
    //variables et hoisting (la remontee)
    // console.log('x',x);//erreur , x n'est pas encore declaree
    
let x=10;
console.log('y',y);//y = undefined
var y=9;// y=9
let s=10+9+'Maguette';//19+"Maguette"=>"19Maguette"
// 'a'+1+2 ='a1'+2=>'a12'
//  'a'+(1+2) ='a'+3=>'a3'
console.log('s est ',s);
console.log('M1 ',x,y);//'M1 '+10=>'M1 10'
console.log('w',w);
//bloc de code  1
{
    let z=6;// est une variable de portee (scope ou visibility) locol , definie seulement dans le bloc de creation  
const C=100;// au niveau du scope c'est la meme que let sauf qu'on ne peut pas la modifier
    var w=11;//hoisting , remontee en haut de la declaration de la variable w (qui aura par defaut undifined avant cette ligne de code )
    console.log('M2 ',x,y,z,w);
    //bloc 2
    {
        console.log('M21 ',x,y,z,w);
       
        console.log('C est '+C);
        
    }
}
//difference entre null et undefined
// null (absence de valeur)
//x=null => x n'a pas de valeur => x sera libere de la memoire , null est donnee par le developpeur 

// undefined <=> null sauf donnee par default par JS (implicite)
console.log(null==undefined,null===undefined)
// "1"==1 => true
// "1"===1 => false