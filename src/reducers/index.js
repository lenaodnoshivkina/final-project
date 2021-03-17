const initialState = {
    pokemons: [],
    loading: true,
    items: [],
    currentPage: 1,
    availablePages: 5,
    perPage: 9,
    totalCount: 0  
}
const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'POKEDOX_LOADED':
            return {
                ...state,
                pokemons: action.payload,
                loading: false,
                totalCount: action.payload.length                
            };
        case 'POKEDOX_REQUESTED':
            return {
                ...state,
                pokemons: state.pokemons,
                loading: true
            };
        case 'POKEMON_CAUGHT':
            const id = action.payload;
            
            const item = state.pokemons.find(item => item.id === id);

            const newItem = {
                id: item.id,
                name: item.name,
                date: new Date()
            };
            
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state;
    }
}

export default reducer;