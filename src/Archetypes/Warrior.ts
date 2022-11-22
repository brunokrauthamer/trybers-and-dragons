import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

class Warrior extends Archetypes {
  private static _instancesNumber = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    this._instancesNumber += 1;
    return this._instancesNumber;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;