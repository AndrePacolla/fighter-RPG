// criamos objeto padrão

const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0 
}

// class modo funcional 
const createKinight = (name) =>{
    return {
        ...defaultCharacter,
        name,
        life:100,
        maxLife:100,
        attack:10,
        defense:9
    }
}

const createSorcerer = (name) => {
    return{
        ...defaultCharacter,
        name,
        life:80,
        maxLife:80,
        attack:14,
        defense:3
    }
}


const createLittleMonter = () =>{
    return {
        ...defaultCharacter,
        name: "LittleMonster",
        life: 40,
        maxLife: 40,
        attack: 7,
        defense: 4
    }    
}

const bigMonster = () =>{
    return{
        ...defaultCharacter,
        name: "BigMonster",
        life: 130,
        maxLife: 130,
        attack: 18,
        defense: 5 
    }
}

// CENÁRIO --- criamos os objetos para manipular os elementosHTML.
const stage = {
    fighter1: null,
    fighter2:null,
    fighterEl1:null,
    fighterEl2:null,

    // FUNÇÕES --- criamos uma função para manipularmos os objeto do nosso cenário . passando obj para parametro da function

    start(fighter1,fighter2,fighterEl1,fighterEl2){
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighterEl1 = fighterEl1;
        this.fighterEl2 = fighterEl2;
        
        this.fighterEl1.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1 , this.fighter2));
        this.fighterEl2.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2 , this.fighter1));

        this.update();
    },
    update(){
        //Fighter1
        this.fighterEl1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife)*100;
        this.fighterEl1.querySelector('.bar').style.width = `${f1Pct}%`;

        //Fighter2
        this.fighterEl2.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife)*100;
        this.fighterEl2.querySelector('.bar').style.width = `${f2Pct}%`;
    },

    doAttack(attacking , attacked){
        if(attacking.life <= 0 || attacked.life <= 0 ){
            log.addMensagem('Oponete sem nenhum sinal de vida')
            return;
        }

        let factorAttack = (Math.random()*2).toFixed(2);
        let factorDefense = (Math.random()*2).toFixed(2);
        let actualAttack = attacking.attack * factorAttack;
        let actualDefense = attacked.defense * factorDefense;

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;
            log.addMensagem(`${attacking.name} causou ${actualAttack.toFixed(2)} de danos em ${attacked.name}`)
        }else{
            log.addMensagem(`${attacked.name} conseguiu defender...`)
        }
        this.update();
    }

}

// criamos objetos e funcoes fora do stage , joga as mensagens dentro do array , uma vez que o  eventos de click for ativado

const log = {
    list: [],
    addMensagem(msg){
        this.list.push(msg);
        this.render();
    },
    render(){
        const logEl = document.querySelector('.log')
        logEl.innerHTML = '';

        for(let i in this.list){
            logEl.innerHTML += `<li>${this.list[i]}</li>` //irá concatenar dentro do log tag lista..
        }

    }
}