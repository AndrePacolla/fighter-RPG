const defaultCharacter = {
    name:'',
    life:1,
    maxLife:1,
    attack:0,
    defense:0
}

const createKnight = (name)=>{
    return{
        ...defaultCharacter,
        name,
        life:100,
        maxLife:100,
        attack:40,
        defense:25
    }
}

const crateSorcerer = (name) =>{
    return{
        ...defaultCharacter,
        name,
        life:70,
        maxLife:70,
        attack:20,
        defense:30
    }
}

const createLittleMonster = (name) =>{
    return{
        ...defaultCharacter,
        name,
        life:40,
        maxLife:40,
        attack:4,
        defense:4
    }
}
const createBigMonster = (name) =>{
    return{
        ...defaultCharacter,
        name,
        life:120,
        maxLife:120,
        attack:40,
        defense:16
    }
}

const stage = {

    f1: null,
    f2: null,
    fEl1: null,
    fEl2: null,
  
  start(f1,f2,fEl1,fEl2){
    this.f1 = f1,
    this.f2 = f2,
    this.fEl1 = fEl1,
    this.fEl2 = fEl2


    this.fEl1.querySelector('.attackButton').addEventListener('click',() => this.doAttack(this.f1,this.f2))
    this.fEl2.querySelector('.attackButton').addEventListener('click',() => this.doAttack(this.f2,this.f1))

    this.update();
  },

  update(){

      this.fEl1.querySelector('.name').innerHTML = `${this.f1.name} - ${this.f1.life.toFixed(1)}HP`
      let f1pct =  (this.f1.life / this.f1.maxLife)* 100;
      this.fEl1.querySelector('.bar').style.width = `${f1pct}%`

      this.fEl2.querySelector('.name').innerHTML = `${this.f2.name} - ${this.f2.life.toFixed(1)}HP`
      let f2pct = (this.f2.life / this.f2.maxLife)* 100;       
      this.fEl2.querySelector('.bar').style.width = `${f2pct}%`

  },

  doAttack(attacking , attacked){
    if(attacking.life <=0 || attacked.life <=0){
        console.log('Oponente sem sinal de vida...');
        return
    }

    let facAttack = (Math.radom() * 2).toFixed(2);
    let facDefense = (Math.radom() * 2).toFixed(2);


    let atualAttack = attacking.atack * facAttack;
    console.log(atualAttack)


    this.update();
  }

}
