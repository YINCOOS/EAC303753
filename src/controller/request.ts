import { fetchEvolutionChain } from '../utils';

export async function getEvolutionChain(pokemonName:any) {
    const evolutionChain = await fetchEvolutionChain(pokemonName);

    if (evolutionChain) {
        const result = {
            name: evolutionChain[0].name,
            variations: evolutionChain[0].variations,
        };

        console.log(JSON.stringify(result, null, 2));
    }
}

