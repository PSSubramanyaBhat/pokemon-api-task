import {fetchPokemons} from './api';

// it('fetchPokemons test', () => {
//     // return fetchPokemons().then((json) => {
//     //     expect(json).not.toBeNull();
//     // });

//     return fetchPokemons('charmander').then((json) => {
//         expect(json).not.toBeNull();
//     });
// });

test('fetchPokemons test', () => {
    return fetchPokemons('charmander').then((json) => {
        expect(json).not.toBeNull();
    });
});