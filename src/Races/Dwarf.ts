import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static instancesNumber = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    this.instancesNumber += 1;
    return this.instancesNumber;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}