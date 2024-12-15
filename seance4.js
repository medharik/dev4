// les objets :
// 1. les objets sont des collections de données
// 2. et de  méthodes
const ali = { id: 1, nom: "alami", prenom: "ali", age: 19 }; //key/property:value
const rim = { id: 2, nom: "rima", prenom: "rim", age: 20 };
//modifier une property
ali.nom = "karimi";
console.log("ali est ", ali);

//supprimer
delete ali.nom;
console.log(ali);
//ajouter
ali.nom = "SAMIRI";
ali.dateNaissance = "12/12/2000";
console.log(ali);
//acceder a une prepriete :

console.log("le nom de rim est " + rim.nom);//object notation
console.log(
  "le nom de rim est " + rim['nom'] + 19 + " salut rum.prenom" + rim.prenom,
);
const x = "nom";
console.log("le nom de rim est "+ rim);
const john = {
  minAge: 19,
  maxAge: 25,
  age: 20,
  nom: "Doe",
  prenom: "john",
  //methode
  accepter() {
    if (this.age < this.maxAge && this.age > this.minAge) {
      console.log("accepte");
    } else {
      console.log("refuse");
    }
  },
  afficher(){
    // console.log('le nom complet est '+this.nom+' '+this.prenom);
    console.log(`le nom complet est ${this.nom} ${this.prenom}`);
  }
};
john.afficher();
john.accepter();
john.age=15;
john.accepter();
const david=john;//passage par adresse/reference :david pointe vers la meme adresse memoire que john;
david.prenom='DAVID';
let prix=20;
let price=prix;//passage par valeur : price recoit une copie de prix : 20 et il est dans une memoire differente
prix=200;
console.log('prix , price',prix,price);

//cloner un objet 
const johnClone={id: john.id,nom: john.nom};
johnClone.age=john.age;
johnClone.prenom=john.prenom;
// ou bien on utilise SPREAD : ...
const johnClone2={...john,age:35};
johnClone2.age=20;
// johnClone2.prenom='john clone 2';
johnClone2.prenom='john clone';
console.log('john 2',johnClone2,john);
//exercice  1: 
let qte=90;
let qte2=qte;//passage par valeur (2 adresses/memoires differente avec meme valeur)
qte=30;
console.log('test 1',qte,qte2);
// exercice 2 : 
let hp={id:1,prix:200,libelle:'hp '};//hp est une adresse qui pointe vers une collection
let dell=hp;//passage par adresse
dell.id=100;
console.log(dell);
//exercice 3 :
const acer={...hp,libelle: 'acer'};//acer une clone de hp (2 adresses memoires diffrentes)
console.log('acer',acer,'hp',hp)