"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEvolutionChain = void 0;
const axios = require('axios');
async function fetchEvolutionChain(pokemonName) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
        const evolutionChainUrl = response.data.evolution_chain.url;
        const evolutionChainResponse = await axios.get(evolutionChainUrl);
        return processEvolutionChain(evolutionChainResponse.data.chain);
    }
    catch (error) {
        console.error('Error fetching evolution chain:', error);
        return null;
    }
}
exports.fetchEvolutionChain = fetchEvolutionChain;
function processEvolutionChain(chain) {
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
