// Soldier
class Soldier {
  constructor(health, strength) {
    
  }
  attack(){
    return this.strength();
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength), (this.name = name);
  }
}

receive Damage(damage){
  this.health -= damage;
  if (this.health > 0){
    return `${this.name} has received ${damage} points of damage`;
  }
  else{
    return `${this.name} has died in act of combat`;
  }
}

battleCry(){
  return 'Odin Own You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
    super(health, strength);
  }

}

reciveDamage(damage) {
  this.health -= damage;
  if (this.health > 0){
    return `A Saxon has received ${damage} points of damage`;
  }
  else{
    return 'A Saxon has died in combat';
  }
}
}

// War
class War {}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}