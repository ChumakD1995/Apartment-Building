class Human {
  constructor(name,gender) {
    this.name = name;
    this.gender = gender;
  }
}

const Human1 = new Human("Dmytro", "Male");
const Human2 = new Human("Bogdan", "Male");
const Human3 = new Human("Kate", "Female"); 
console.log(Human1,Human2,Human3) 


class Apartment {
  constructor() {
    this.residents = [];
  }
  addResident(Human) {
    this.residents.push(Human)
  }
}

const Apartment1 = new Apartment(); 
console.log(Apartment1.residents); 
Apartment1.addResident(Human1);
console.log(Apartment1,Human1);


class House {
  constructor(maximumNumberOfApartments) {
    this.apartments = [];
    this.maximumNumberOfApartments = maximumNumberOfApartments;
  }
  addApartment(Apartment1) {
    if (this.apartments.length < this.maximumNumberOfApartments) {
      this.apartments.push(Apartment1)
    } else {
      console.log("Maximum number of apartments in a house")
    }
  }
}

const House1 = new House(3);
console.log(House1.apartments);
console.log(House1.maximumNumberOfApartments);

const Apartment2 = new Apartment();
House1.addApartment(Apartment2);
console.log(House1.apartments);

const Apartment3 = new Apartment();
House1.addApartment(Apartment3);
console.log(House1.apartments);

const Apartment4 = new Apartment();
House1.addApartment(Apartment4);
console.log(House1.apartments);

const Apartment5 = new Apartment();
House1.addApartment(Apartment5);
console.log(House1.apartments);







