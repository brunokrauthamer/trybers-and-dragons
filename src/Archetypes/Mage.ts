import { EnergyType } from '../Energy';
import Archetypes from './Archetype';

class Mage extends Archetypes {
  private static _instancesNumber = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    this._instancesNumber += 1;
    return this._instancesNumber;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;