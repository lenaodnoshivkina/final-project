import React from 'react';
import { connect } from 'react-redux';
import WithPokedoxService from '../hoc';
import { useParams } from 'react-router';

import './pokemon-card.scss'

const PokemonCard = ({pokemonItems, pokemonsCaught}) => {
    const {id} = useParams();

    let pokemonItem = pokemonsCaught.find(item => item.id == id);
    let category;

    if(pokemonItem){
        const {date} = pokemonItem;
        category = `This Pokemon was caught on ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
    }else{
        pokemonItem = pokemonItems.find(item => item.id == id);
        category = "This Pokemon hasn't been caught yet";
    }
    return (
        <div className="card__item">
            <div className="card__title">{pokemonItem.name}</div>
            <img className="card__img" src={`../../../public/pokemons/${id}.png`} alt={name}></img>
            <div className="card__title">{category}</div>
        </div>
    )  
}

const mapStateToProps = (state) => {
    return{
        pokemonItems: state.pokemons,
        pokemonsCaught: state.items
    }
};

export default WithPokedoxService()(connect(mapStateToProps)(PokemonCard));