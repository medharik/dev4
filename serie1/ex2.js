//  2. Vérification de palindromes
// Écrivez une fonction pour vérifier si une chaîne de caractères est un palindrome (elle se lit de la même manière dans les deux sens).

// function isPalindrome(str) {
//     // Votre code ici
// }
// console.log(isPalindrome("radar")); // Résultat : true
// console.log(isPalindrome("javascript")); // Résultat : false
// "java"=>"avaj" => false
//radar=> radar=> true

//definition de la fonction  (named function)
//     let motInverse="";
//     for (let i = mot.length-1; i >=0 ; i--) motInverse+=mot[i];
//    return mot===motInverse;
// return mot.split("").// ['j','a','v','a']; "ali@gmail.com".split("")
// reverse(). // ['a','v','a','j']
// join("") ===mot //avaj
function isPalindrome(mot){
return mot.split("").reverse().join("")===mot;
}


function secondLargest(nums) {
   nums.sort((a,b)=>b-a);
   return nums[1] ?? -1;
}
console.log(secondLargest([10, 20, 30, 40])); // Résultat : 30
console.log(secondLargest([5, 1, 9, 2])); // Résultat : 5

const t=[12,5,6,19];
// t.sort((a,b)=>b-a);
const etudiants=[
    {nom:"ali",prenom:"mohamed",age:20},
    {nom:"rim",prenom:"rima",age:19},
    {nom:"doe",prenom:"john",age:25},
];
etudiants.sort((a,b)=>b.age-a.age);
console.log(etudiants)

//appel de la fonction (function call)
console.log(isPalindrome("radar"));
console.log(isPalindrome("java")); 
module.exports={isPalindrome,secondLargest};
