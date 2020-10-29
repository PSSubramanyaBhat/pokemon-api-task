async function fetchPokemons(pokemonName) {
    // let response = await fetch('https://pokeapi.co/api/v2/pokemon-species/4/');
    // let response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');

    let response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName);
    if (response.ok) {
        console.log("The STATUS code for this API request: "+response.status);

        let result = await response.json();
        let number_of_abilities = result.abilities.length;
        let number_of_moves = result.moves.length;
        
        let pokemon_abilities = [];
        let pokemon_moves = [];

        for(let i = 0; i < number_of_abilities; i++) {
            pokemon_abilities.push(result.abilities[i].ability.name);
        }

        for(let i = 0; i < number_of_moves; i++) {
            pokemon_moves.push(result.moves[i].move.name);
        }

        console.log('The basic stats about '+result.name); 
        console.log('Name of the Pokemon: '+pokemonName);
        console.log('Pokedex ID: '+result.id);
        console.log('Height: '+result.height);
        console.log('Weight: '+result.weight);
        console.log('Base Experience: '+result.base_experience);

        console.log('The Abilities of '+result.name); 
        for (let i of pokemon_abilities) {
            console.log(i); 
        }

        console.log('The Top 6 moves of '+result.name); 
        for (let i = 1; i <=6 ; i++) {
            console.log('Move no. '+i+': '+pokemon_moves[i-1]); 
        }

        
        // console.log(pokemon_moves);        
        // console.log(result.moves);
        // console.log(result);
        // return response.json();
        return result;
    } else {
        throw new Error('HTTP -ERROR: '+response.status+' \nThe error message: '+response.statusText);
    }
}

export {fetchPokemons};