function declareWinner(fighter1, fighter2, firstAttacker) {
    let dmg1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    let dmg2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    if (dmg1 > dmg2 ){
      return fighter1.name
    }else if(dmg1 < dmg2) {
      return fighter2.name
    }
    return firstAttacker
  }
  
  
  // two fighters and a first attacker 
  // lets declare an attack and make sure we round it up to a nice number (: using math.ceil//
  // repeat the steps for the following attacks 
  // if statement to return name of winner 
  //