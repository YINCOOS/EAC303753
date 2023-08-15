"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEvolutionChain = void 0;
const utils_1 = require("../utils");
async function getEvolutionChain(pokemonName) {
    const evolutionChain = await (0, utils_1.fetchEvolutionChain)(pokemonName);
    if (evolutionChain) {
        const result = {
            name: evolutionChain[0].name,
            variations: evolutionChain[0].variations,
        };
        console.log(JSON.stringify(result, null, 2));
    }
}
exports.getEvolutionChain = getEvolutionChain;
