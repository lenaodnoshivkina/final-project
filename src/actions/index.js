const pokedoxLoaded = (newPokedox) => {
    return {
        type: 'POKEDOX_LOADED',
        payload: newPokedox
    };
};

const pokemonsRequested = () => {
    return {
        type: 'POKEDOX_REQUESTED'
    };
};

const pokedoxError = () => {
    return {
        type: 'POKEDOX_ERROR',
    }
};

const addedToCaught = (id) => {
    return {
        type: 'POKEMON_CAUGHT',
        payload: id
    }
}

const setCurrentPage = (page) => {
    return {
        type: 'SET_CURRENT_PAGE',
        payload: page
    }
}

export {
    pokedoxLoaded,
    pokemonsRequested,
    pokedoxError,
    addedToCaught,
    setCurrentPage
};