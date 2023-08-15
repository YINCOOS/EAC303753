const axios = require('axios');


export async function fetchEvolutionChain(pokemonName: any) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
        const evolutionChainUrl = response.data.evolution_chain.url;
        
        const evolutionChainResponse = await axios.get(evolutionChainUrl);
        return processEvolutionChain(evolutionChainResponse.data.chain);
    } catch (error) {
        console.error('Error fetching evolution chain:', error);
        return null;
    }
}

function processEvolutionChain(chain: { species: { name: any; }; evolves_to: { length: number; map: (arg0: (chain: any) => { name: any; variations: never[]; }[]) => never[]; }; }) {
    const variations = [];

    if (chain.species) {
        const variation = {
            name: chain.species.name,
            variations: [],
        };

        if (chain.evolves_to.length > 0) {
            variation.variations = chain.evolves_to.map(processEvolutionChain);
        }

        variations.push(variation);
    }

    return variations;
}