import React from 'react';
import { NavLink } from 'react-router-dom';
import './pokemon-list-item.scss';

const PokemonListItem = ({pokemonItem, onAddToCaught, disabled}) => {
    const {id, name} = pokemonItem;
    return (
        <div className="pokemon__item">
            <div className="pokemon__title"><NavLink to={`/card/${id}`}>{name}</NavLink></div>
            <NavLink to={`/card/${id}`}><img className="pokemon__img" src={`../../../public/pokemons/${id}.png`} alt={name}></img></NavLink>
            <button disabled={disabled} onClick = {(e) => {
                            e.preventDefault();
                            onAddToCaught();
                        }} 
                        className="pokemon__btn">Add to caught</button>
        </div>
    )
}

export default PokemonListItem;