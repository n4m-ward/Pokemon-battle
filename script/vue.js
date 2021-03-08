new Vue({
    el:'#app',
    data:{
        endGame:true,
        menuPadrao:false,
        attackMenu:false,
        healMenu:false,
        poke1LifePoints:100,
        poke2LifePoints:100,
        poke1opacity:10,
        poke2opacity:10,
        poke1marginb:0,
        poke1marginl:80,
        poke2marginr:0,
        poke2margint:0,
        hyperPotionIsUsed:false,
        pokemon1:{
            name:'Mewtwo',
            lvl:100,
            lifePoints:100,
            quickAttack: 10,
            potion: 10,
            hyperPotion:30,
            hyperBeam: 20
        },
        pokemon2:{
            name:'Sh. Mewtwo',
            lvl:100,
            lifePoints:100
        }
    },
    computed:{
        pokemonlifeBar1css(){
            return {
                width:this.pokemon1.lifePoints + '%',

            }
        },
        pokemonlifeBar2css(){
            return {
                width:this.pokemon2.lifePoints + '%'
            }
        },
        pokemon1Css(){
            return {
                opacity:(this.poke1opacity / 10)
            }
        },
        pokemon2Css(){
            return {
                opacity:(this.poke2opacity / 10)
            }
        }
    },
    methods:{
        giveUp(){
            this.endGame = !this.endGame
            this.menuPadrao = !this.menuPadrao
        },
        openAttackMenu(){
            this.menuPadrao = !this.menuPadrao
            this.attackMenu = !this.attackMenu
        },
        openHealMenu(){
            this.menuPadrao = !this.menuPadrao;
            this.healMenu = !this.healMenu;
        },
        heal(potion){
            if(potion == 'hyperPotion'){
                if(this.hyperPotionIsUsed == false){
                    this.pokemon1.lifePoints += this.pokemon1[potion];
                    this.hyperPotionIsUsed = true;
                }else{
                    alert('Voce não pode usar a Hyper potion mais de uma vez!')
                    return 
                }
            }else{
                this.pokemon1.lifePoints += this.pokemon1[potion];
            }
            console.log(`heal: ${this.pokemon1[potion]}`)
            this.pokemon1.lifePoints = this.pokemon1.lifePoints > 100 ? 100 : this.pokemon1.lifePoints
            this.diminuirVidaPoke(this.pokemon1,16) 
        },
        diminuirVidaPoke(pokemon,atkPoints){;
            let damage = Math.floor(Math.random() * atkPoints)
            console.log(`${pokemon.name} damage : ${damage}`)

            //pokemon.name != 'Mewtwo' ? this.animationAtk1() : this.animationAtk2();
            pokemon.lifePoints -= damage;
            pokemon.lifePoints = pokemon.lifePoints > 0 ? pokemon.lifePoints : 0;
            if(pokemon.lifePoints == 0){
                pokemon.name == 'Mewtwo' ? alert('Voce perdeu!') : alert('voce ganhou!')
                this.endGame = true
                this.menuPadrao = false
                this.attackMenu = false
                this.healMenu = false
                this.pokemon1.lifePoints = 100
                this.pokemon2.lifePoints = 100
            }
        },
        async iniciarAtk(atk){
            let atkPoint = atk ? this.pokemon1[atk] : 16;

            this.diminuirVidaPoke(this.pokemon2,atkPoint)
            this.diminuirVidaPoke(this.pokemon1,atkPoint)  
        },
        animationAtk1(){
            const temporizador1 = setInterval(()=>{
                this.poke2opacity -= 1;
                if(this.poke2opacity == 0){
                    const temporizador2 = setInterval(()=>{
                        this.poke2opacity += 1;
                        if(this.poke2opacity == 10) {
                            clearInterval(temporizador2) 
                            clearInterval(temporizador1)
                        }
                    },100)
                }
            },100)
        },
        animationAtk2(){
            const temporizador1 = setInterval(()=>{
                this.poke1opacity -= 1;
                if(this.poke1opacity == 0){
                    const temporizador2 = setInterval(()=>{
                        this.poke1opacity += 1;
                        if(this.poke1opacity == 10) {
                            clearInterval(temporizador2) 
                            clearInterval(temporizador1)
                        }
                    },100)
                }
            },100)
            
        }
    }
})