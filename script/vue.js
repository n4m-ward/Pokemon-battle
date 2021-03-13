new Vue({
    el:'#app',
    data:{
        endGame:true,
        displayModal: true,
        menuPadrao:false,
        attackMenu:false,
        pokemonMenu:false,
        healMenu:false,
        healItems:{
            potion:{
                quantity:4,
                hp:30
            },
            hyperPotion:{
                quantity:2,
                hp:50
            }
        },
        pokemons:{
            dialga:{
                name:'dialga',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/483.png',
                attack:{
                    cut:{
                        atk:20,
                        pp:20
                    },
                    headbutt:{
                        atk:30,
                        pp:10
                    },
                    flamethrower:{
                        atk:40,
                        pp:3
                    },
                    iceBeam:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            mewtwo:{
                name:'mewtwo',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png',
                attack:{
                    takeDown:{
                        atk:20,
                        pp:20
                    },
                    headbutt:{
                        atk:30,
                        pp:10
                    },
                    megaPunch:{
                        atk:40,
                        pp:3
                    },
                    thunderPunch:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            celebi:{
                name:'celebi',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/251.png',
                attack:{
                    confusion:{
                        atk:20,
                        pp:20
                    },
                    psychic:{
                        atk:30,
                        pp:10
                    },
                    megaPunch:{
                        atk:40,
                        pp:3
                    },
                    solarBeam:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            entei:{
                name:'entei',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/244.png',
                attack:{
                    cut:{
                        atk:20,
                        pp:20
                    },
                    bite:{
                        atk:30,
                        pp:10
                    },
                    headbutt:{
                        atk:40,
                        pp:3
                    },
                    flamethrower:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            palkia:{
                name:'palkia',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/484.png',
                attack:{
                    cut:{
                        atk:20,
                        pp:20
                    },
                    headbutt:{
                        atk:30,
                        pp:10
                    },
                    surf:{
                        atk:40,
                        pp:3
                    },
                    blizzard:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            lucario:{
                name:'lucario',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png',
                attack:{
                    quickAttack:{
                        atk:20,
                        pp:20
                    },
                    psychic:{
                        atk:30,
                        pp:10
                    },
                    auraSphere:{
                        atk:40,
                        pp:3
                    },
                    earthquake:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            darkrai:{
                name:'darkrai',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/491.png',
                attack:{
                    cut:{
                        atk:20,
                        pp:20
                    },
                    headbutt:{
                        atk:30,
                        pp:10
                    },
                    iceBeam:{
                        atk:40,
                        pp:3
                    },
                    darkPulse:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            zekrom:{
                name:'zekrom',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/644.png',
                attack:{
                    cut:{
                        atk:20,
                        pp:20
                    },
                    fly:{
                        atk:30,
                        pp:10
                    },
                    thunderPunch:{
                        atk:40,
                        pp:3
                    },
                    darkPulse:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            }
        },
        enemyPokemons:{
            dialga:{
                name:'dialga',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/483.png',
                attack:{
                    cut:{
                        atk:20,
                        pp:20
                    },
                    headbutt:{
                        atk:30,
                        pp:10
                    },
                    flamethrower:{
                        atk:40,
                        pp:3
                    },
                    iceBeam:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            mewtwo:{
                name:'mewtwo',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png',
                attack:{
                    takeDown:{
                        atk:20,
                        pp:20
                    },
                    headbutt:{
                        atk:30,
                        pp:10
                    },
                    megaPunch:{
                        atk:40,
                        pp:3
                    },
                    thunderPunch:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            celebi:{
                name:'celebi',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/251.png',
                attack:{
                    confusion:{
                        atk:20,
                        pp:20
                    },
                    psychic:{
                        atk:30,
                        pp:10
                    },
                    megaPunch:{
                        atk:40,
                        pp:3
                    },
                    solarBeam:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            entei:{
                name:'entei',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/244.png',
                attack:{
                    cut:{
                        atk:20,
                        pp:20
                    },
                    bite:{
                        atk:30,
                        pp:10
                    },
                    headbutt:{
                        atk:40,
                        pp:3
                    },
                    flamethrower:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            palkia:{
                name:'palkia',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/484.png',
                attack:{
                    cut:{
                        atk:20,
                        pp:20
                    },
                    headbutt:{
                        atk:30,
                        pp:10
                    },
                    surf:{
                        atk:40,
                        pp:3
                    },
                    blizzard:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            lucario:{
                name:'lucario',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/448.png',
                attack:{
                    quickAttack:{
                        atk:20,
                        pp:20
                    },
                    psychic:{
                        atk:30,
                        pp:10
                    },
                    auraSphere:{
                        atk:40,
                        pp:3
                    },
                    earthquake:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            darkrai:{
                name:'darkrai',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/491.png',
                attack:{
                    cut:{
                        atk:20,
                        pp:20
                    },
                    headbutt:{
                        atk:30,
                        pp:10
                    },
                    iceBeam:{
                        atk:40,
                        pp:3
                    },
                    darkPulse:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            },
            zekrom:{
                name:'zekrom',
                hp:100,
                front:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png',
                back:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/644.png',
                attack:{
                    cut:{
                        atk:20,
                        pp:20
                    },
                    fly:{
                        atk:30,
                        pp:10
                    },
                    thunderPunch:{
                        atk:40,
                        pp:3
                    },
                    darkPulse:{
                        atk:50,
                        pp:2
                    }
                },
                defeated:false
            }
        },
        pokemonsAdicionados: [],
        time:[],
        timeInimigo: [],
        pokemonAtual: {},
        pokemonInimigoAtual: {},
        bottomLogMessages:[],
        poke1opacity: 10,
        poke2opacity: 10

    },
    computed:{
        pokemonlifeBar1css(){
            return {
                width:this.pokemonAtual.hp + '%',

            }
        },
        pokemonlifeBar2css(){
            return {
                width:this.pokemonInimigoAtual.hp + '%'
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
        giveUp(resultado){
            if(resultado == 'ganhou') alert('Voce Ganhou!')
            if(resultado == 'perdeu') alert('Voce Perdeu!')
            if(resultado == 'desistiu') alert('Voce Desistiu!')
            this.resetar()
        },
        resetar(){
            location.reload()
        },
        start(){
            this.endGame = !this.endGame
            this.menuPadrao = !this.menuPadrao
        },
        openAttackMenu(){
            this.menuPadrao = !this.menuPadrao
            this.attackMenu = !this.attackMenu
        },
        openPokemonMenu(){
            this.menuPadrao = !this.menuPadrao
            this.pokemonMenu = !this.pokemonMenu
        },
        openHealMenu(){
            this.menuPadrao = !this.menuPadrao;
            this.healMenu = !this.healMenu;
            this.attackMenu = false;
        },
        heal: function(item){
            let potion = this.healItems[item];
            if(potion.quantity != 0){
                this.pokemonAtual.hp += potion.hp;
                this.pokemonAtual.hp = this.pokemonAtual.hp > 100 ? 100 : this.pokemonAtual.hp
            }else{
                alert('Limite de potion atingido!')
            }
        },
        diminuirVidaPoke(pokemon,golpe,enemy){
            let { pp, atk } = golpe
            let damage = Math.floor(Math.random() * atk)
            damage == 0 ? damage = 1 : damage
            this.setBattleLog('damage',golpe,damage,enemy)
            if(golpe.pp == 0){
                alert('limite de golpes excedido!')
                return
            }else{
                pokemon.hp -= damage
                this.animacaoPokemonDamage(enemy)
                golpe.pp -=1
                pokemon.hp < 0 ? pokemon.hp = 0 : pokemon.hp
            }
            if(pokemon.hp == 0){
                pokemon.defeated = true
            }
        },
        iniciarAtk(golpe){
            this.diminuirVidaPoke(this.pokemonInimigoAtual,golpe,false)  
            this.verificarTrocaDePokemonInimigo()
            setTimeout(()=>{
                this.iniciarAtkPokemon2()
                this.verificarTrocaDePokemon()
                if(this.pokemonAtual.hp == 0) this.giveUp('perdeu')
                if(this.pokemonInimigoAtual.hp == 0) this.giveUp('ganhou')
            },1000)
        },
        iniciarAtkPokemon2(){
            let attacksObj = this.pokemonInimigoAtual.attack
            let index = Math.floor(Math.random() * 4)
            let attacks =  Object.entries(attacksObj);
            let golpe = attacks[index][1]
            this.diminuirVidaPoke(this.pokemonAtual,golpe,true)
        },
        openModal(){
            this.displayModal = !this.displayModal
        },
        criarTime(nomePokemon){
            let pokeIndex = this.pokemonsAdicionados.indexOf(nomePokemon)
            if(pokeIndex != -1){
                this.pokemonsAdicionados.splice(pokeIndex,1)
            }else{
                this.pokemonsAdicionados.push(nomePokemon)
            }
        },
        confirmarTime(){
            if(this.pokemonsAdicionados.length < 3 || this.pokemonsAdicionados.length > 3){
                let pokemonsAdicionados = this.pokemonsAdicionados.length;
                alert(`Voce precisa selecionar 3 pokemons! foram adicionados ${pokemonsAdicionados} Pokemons!`)
                return
            }else{
                this.pokemonsAdicionados.forEach(pkm =>{
                    this.time.push(this.pokemons[pkm])
                })
            }
            this.criarTimeInimigo()
            this.openModal()
            this.setAtualPokemon();
            this.setAtualPokemonInimigo()
        },
        criarTimeInimigo(){
            let pokemonsinimigos = ['dialga','palkia','mewtwo','celebi','entei','lucario','darkrai','zekrom']
            let indexUsados = [];
            for(let i = 0; i < 3; i++){
                var index = Math.floor(Math.random() * 8)
                indexUsados.push(index)
                while(indexUsados.indexOf(index) == -1){
                    index = Math.floor(Math.random() * 8)
                }
                this.timeInimigo.push(this.enemyPokemons[pokemonsinimigos[index]])
            }
        },
        animacaoTrocaDePokemon(pokemon){
            const back = pokemon.back
            pokemon.back = './images/pokebola.gif'
            setTimeout( ()=>{
                pokemon.back = back
            },850)
        },
        animacaoTrocaDePokemonInimigo(pokemon){
            const front = pokemon.front
            pokemon.front = './images/pokebola.gif'
            setTimeout( ()=>{
                pokemon.front = front
            },850)
        },
        animacaoPokemonDamage(enemy){
            if(enemy){
                let intervalo = setInterval(() => {
                    this.poke2opacity -= 5
                    if(this.poke2opacity <= 0) this.poke2opacity = 0
                    console.log(this.poke2opacity)
                    if(this.poke2opacity == 0) clearInterval(intervalo)
                }, 50);
                setTimeout(()=>{
                    let intervalo2 = setInterval(() => {
                        if(this.poke2opacity >= 10) this.poke2opacity = 10
                        if(this.poke2opacity == 10) clearInterval(intervalo2)
                    }, 50);
                },500)
            }else{

                let intervalo = setInterval(() => {
                    this.poke1opacity -= 5
                    if(this.poke1opacity <= 0) this.poke1opacity = 0
                    console.log(this.poke1opacity)
                    if(this.poke1opacity == 0) clearInterval(intervalo)
                }, 50);
                setTimeout(()=>{
                    let intervalo2 = setInterval(() => {
                        this.poke1opacity += 5
                        if(this.poke1opacity >= 10) this.poke1opacity = 10
                        if(this.poke1opacity == 10) clearInterval(intervalo2)
                    }, 50); 
                },500)
            }

        },
        setAtualPokemon(){
            if(this.time){
                this.time.forEach(pokemon =>{
                    if(!pokemon.defeated){
                        this.pokemonAtual = pokemon
                        this.animacaoTrocaDePokemon(pokemon)
                        return
                    }
                })
            }
        },
        setAtualPokemonInimigo(){
            if(this.timeInimigo){
                this.timeInimigo.forEach(pokemon =>{
                    if(!pokemon.defeated){
                        this.pokemonInimigoAtual = pokemon
                        this.animacaoTrocaDePokemonInimigo(pokemon)
                        return
                    }
                })
            }
            
        },
        verificarTrocaDePokemon(){
            if(this.pokemonAtual.defeated){
                this.setBattleLog('defeated',0,0,false)
                this.setAtualPokemon()
            } 
        },
        verificarTrocaDePokemonInimigo(){
            if(this.pokemonInimigoAtual.defeated){
                this.setBattleLog('defeated',0,0,true)
                this.setAtualPokemonInimigo()
            } 
        },
        showAlert(){
            alert('ainda nao conclui essa função :D')
        },
        setBattleLog(type,golpe,dano,enemy){
            let pokemon = enemy ? this.pokemonInimigoAtual : this.pokemonAtual
            let {name} = pokemon 
            let message = ''
            if(type == 'heal'){
                let { quantidade } = this.healItems[golpe]
                message = `Voce usou ${golpe}, e ${name} recuperou ${quantidade} pontos de vida!`
            }
            if(type == 'damage'){
                let nomeGolpe = ''
                let attackKeys = Object.keys(pokemon.attack)
                attackKeys.forEach(value =>{
                    if(pokemon.attack[value] == golpe){
                         nomeGolpe = value;
                    }
                })
                message = `${name} usou ${nomeGolpe} e causou ${dano} de dano!`
            }
            if(type == 'defeated'){
                message = `${name} Desmaiou!`
            }
            this.bottomLogMessages.unshift(message)
        }
    }
})