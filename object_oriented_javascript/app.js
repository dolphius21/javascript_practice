class Pet {
   constructor(animal, age, breed, sound) {
      this.animal = animal;
      this.age = age;
      this.breed = breed;
      this.sound = sound;
   }
   
   get activity() {
      const today = new Date();
      const hour = today.getHours();
      if (hour > 8 && hour <= 20) {
         return 'playing';
      } else {
         return 'sleeping';
      }
   }

   set owner(owner) {
      this._owner = owner;
      console.log(`setter called: ${owner}`);
   }

   get owner() {
      return this._owner;
   }

   speak() {
      console.log(this.sound);
   }
}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');

ernie.speak();
vera.speak();

console.log(ernie);
console.log(vera);

ernie.owner = 'Ashley';

console.log(ernie.owner);