import React, {Component} from 'react';
import PokemonListItem from '../pokemon-list-item';
import {connect} from 'react-redux';
import  WithPokedoxService from '../hoc';
import {pokedoxLoaded, pokemonsRequested, pokedoxError, addedToCaught} from '../../actions';
import Spinner from '../spinner'
import Error from '../error';

import './pokemon-list.scss';

class PokemonList extends Component {

    componentDidMount(){
        this.props.pokemonsRequested();

        const {PokedoxService} = this.props;
        PokedoxService.getPokedoxItems()
        .then(res => this.props.pokedoxLoaded(res))
        .catch(() => this.props.pokedoxError());
    }
    render() {
        const {pokemonItems, loading, error, addedToCaught, pokemonsCaught, currentPage, perPage} = this.props;
        let disabled;

        if(error){
            return <Error/>
        }

        if(loading){
            return <Spinner/>
        }


        const start = (currentPage - 1)*perPage;
        const end = currentPage*perPage;
        const paginationItems = pokemonItems.slice(start, end);



        const items = paginationItems.map(pokemonItem => {
            pokemonsCaught.find(item => item.id === pokemonItem.id) ? disabled = true : disabled = false

            return(
                <PokemonListItem 
                    key={pokemonItem.id} 
                    pokemonItem={pokemonItem}
                    onAddToCaught={() => addedToCaught(pokemonItem.id)} 
                    disabled={disabled}    
                />
            )
        })


        return (
            <View items={items}/>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage,
        perPage: state.perPage,
        pokemonItems: state.pokemons,
        loading: state.loading,
        error: state.error,
        pokemonsCaught: state.items
    }
}

const mapDispatchToProps = {
    pokedoxLoaded,
    pokemonsRequested,
    pokedoxError,
    addedToCaught
};

const View = ({items}) => {

    return (
        <div className="pokemon__list">
            {items}
        </div>
    ) 
}

export default WithPokedoxService()(connect(mapStateToProps, mapDispatchToProps)(PokemonList));