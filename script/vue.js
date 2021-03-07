new Vue({
    el:'#app',
    data:{
        endGame:true,
        menuPadrao:false,
        attackMenu:false,
        healMenu:false,
        poke1LifePoints:100,
        poke2LifePoints:100,
        width1: '100%',
        width2: '100%',
        pokemon1:{
            name:'Mewtwo',
            lvl:100,
            lifePoints:100,
            quickAttack: 10,
            hyperBeam: 20
        },
        pokemon2:{
            name:'Sh. Mewtwo',
            lvl:100,
            lifePoints:100
        }
    },
    computed:{
        pokemon1LifeBar(){
            return this.pokemon1.lifePoints + '%'
        },
        pokemon2LifeBar(){
            return this.pokemon2.lifePoints + '%'
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
        attack(){
            alert('atacando')
        },
        heal(){
            alert('curando')
        },
        diminuirVidaPoke(pokemon,atkPoints){;
            let { lifePoints } = pokemon;
            let damage = Math.floor(Math.random() * atkPoints)
            console.log(`${pokemon.name} damage : ${damage}`)
            const temporizador = setInterval(()=>{
                pokemon.lifePoints -=1;
                if(pokemon.lifePoints == lifePoints - damage) clearInterval(temporizador)
            },100)
        },
        async iniciarAtk(atk){
            let atkPoint = this.pokemon1[atk];
            let enemyAtkPoint = 14

            await this.diminuirVidaPoke(this.pokemon1,atkPoint)
            await this.diminuirVidaPoke(this.pokemon2,enemyAtkPoint)
        }
    }
})