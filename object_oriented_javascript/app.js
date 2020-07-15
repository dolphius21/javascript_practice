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

class Owner {
   constructor(name, address) {
      this.name = name;
      this.address = address;
   }

   set phone(phone) {
      const normalizedPhone = phone.replace(/[^0-9]/g, '');
      this._phone = normalizedPhone;
   }

   get phone() {
      return this._phone;
   }
}

const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const vera = new Pet('dog', 8, 'border collie', 'woof woof');

ernie.owner = new Owner('Ashley', '123 Main Street');
ernie.owner.phone = '(555) 555-5555';

console.log(ernie.owner);