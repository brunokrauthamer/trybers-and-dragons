import Dwarf from './Races/Dwarf';

const obj = new Dwarf('nome', 10);
console.log(obj.dexterity);
console.log(obj.maxLifePoints);
console.log(obj.name);
console.log(Dwarf.createdRacesInstances());

const obj2 = new Dwarf('nome2', 20);
console.log(obj2.dexterity);
console.log(obj2.maxLifePoints);
console.log(obj2.name);
console.log(Dwarf.createdRacesInstances());