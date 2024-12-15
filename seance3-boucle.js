// les boucles
//for : souvent utilisee pour un nombre de repetition fixe
for (let i = 0; i < 3; i++) {
    if(i==1) continue; // passe directement au i suivant (2)
    if(i==2) break;// quitte immdiatement la boucle 
   console.log(`i est ${i}`);    
}
//for : souvent utilisee pour un nombre de repetition fixe
for (let i = 2; i >= 0; i--) {

   console.log(`i est ${i}`);    
}
// autre exemple 
for (let i = 0,j=4; i < 4 && j>=0 ; i+=2,j--) {
    
}
// la boucle while : souvent utilisee pour un nombre de repeition variable
let i=1;
while(i++ <2){
console.log(`while : i est ${i}`);
}
 i=2;
do{
console.log('test do while ',i)
}while(++i == 3);
// tableau 
const t1=[1,6,8,0];
//longeur : t1.length