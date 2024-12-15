const a=[1,4,2,5];
const b=[1,4,2,5];
const c=a;
if(a==c) console.log('a=c');
else console.log('a!=c');
a[0]=10;
c[1]=40;
//lengueur
console.log(`la longueur du tableau est ${a.length}`);
console.log(`premier element ${a[0]}`)
console.log(`dernier element ${a[a.length-1]}`);
console.log(`b[0]=${b[0]}, c[0]=${c[0]}`);

for (let i = 0; i < a.length; i++) {
   console.log(`a numero ${a[i]}`);
   const e=a[i];
}
for (const i in a) {
 console.log(`a numero ${i} est ${a[i]}`);
}
for (const key in a) {
    console.log(`a numero ${key} est ${a[key]}`);   
}
for (const element of a) {
   console.log(`element      est     ${element}`) 
}

const d=[1,4,5];
for (const key in d) {
    //key = 0 puis 1 puis 2 
}

// exercice : notes=[9,11,-1,10]=> moyenne = sum des notes >=0 / nombre de notes >0
const notes=[9,11,-1,10];
let somme=0;
let nombreNotesPositive=0;
let moyenne=0;
for (const i in notes) {
    if (notes[i]>=0) {
        somme+=notes[i];
        nombreNotesPositive++;
    }

}
moyenne=somme/nombreNotesPositive;
console.log(`la moyenne des ${nombreNotesPositive} notes est ${moyenne}`)
