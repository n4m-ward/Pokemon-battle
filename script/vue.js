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
        pokemonsAdicionados: [],
        time:[],
        timeInimigo: [],
        pokemonAtual: {},
        pokemonInimigoAtual: {},
        bottomLogMessages:[]

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
                this.pokemon1.lifePoints += potion.hp;
                this.pokemon1.lifePoints = this.pokemon1.lifePoints > 100 ? 100 : this.pokemon1.lifePoints
            }else{
                alert('Limite de potion atingido!')
            }
        },
        diminuirVidaPoke(pokemon,golpe){
            let { pp, atk } = golpe
            console.log(`pp: ${pp} | atk: ${atk}`)
            let damage = Math.floor(Math.random() * atk)
            if(golpe.pp == 0){
                alert('limite de golpes excedido!')
                return
            }else{
                pokemon.hp -= damage
                golpe.pp -=1
                pokemon.hp < 0 ? pokemon.hp = 0 : pokemon.hp
            }
            if(pokemon.hp == 0){
                pokemon.defeated = true
            }
        },
        iniciarAtk(golpe){
            this.diminuirVidaPoke(this.pokemonInimigoAtual,golpe)  
            this.verificarTrocaDePokemonInimigo()
            this.iniciarAtkPokemon2()
            this.verificarTrocaDePokemon()
            if(this.pokemonAtual.hp == 0) this.giveUp('perdeu')
            if(this.pokemonInimigoAtual.hp == 0) this.giveUp('ganhou')
        },
        iniciarAtkPokemon2(){
            let attacksObj = this.pokemonInimigoAtual.attack
            let index = Math.floor(Math.random() * 4)
            let attacks =  Object.entries(attacksObj);
            let golpe = attacks[index][1]
            this.diminuirVidaPoke(this.pokemonAtual,golpe)
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
            console.log(this.pokemonsAdicionados);
        },
        confirmarTime(){
            if(this.pokemonsAdicionados.length < 3 || this.pokemonsAdicionados.length > 3){
                alert('Voce precisa selecionar 3 pokemons!')
            }else{
                this.pokemonsAdicionados.forEach(pkm =>{
                    this.time.push(this.pokemons[pkm])
                })
            }
            console.log(this.time)
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
                console.log(`index: ${index}`)
                this.timeInimigo.push(this.pokemons[pokemonsinimigos[index]])
            }
             console.log('time inimigo: ')
             console.log(this.timeInimigo)
        },
        setAtualPokemon(){
            let defeated = []
            if(this.time){
                this.time.forEach(pokemon =>{
                    if(!pokemon.defeated){
                        this.pokemonAtual = pokemon
                        defeated.push('defeated')
                        return
                    }
                })
            }
        },
        setAtualPokemonInimigo(){
            let defeated = []
            if(this.timeInimigo){
                this.timeInimigo.forEach(pokemon =>{
                    if(!pokemon.defeated){
                        this.pokemonInimigoAtual = pokemon
                        defeated.push('1')
                        return
                    }
                })
            }
            
        },
        verificarTrocaDePokemon(){
            if(this.pokemonAtual.defeated) this.setAtualPokemon()
        },
        verificarTrocaDePokemonInimigo(){
            if(this.pokemonInimigoAtual.defeated) this.setAtualPokemonInimigo()
        },
        resetar(){
            location.reload()
        },
        showAlert(){
            alert('ainda nao conclui essa função :D')
        }
    }
})