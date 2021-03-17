import React, {Component} from 'react';
import PokemonList from '../pokemon-list';
import Pagination from '../pagination'

const MainPage = () => {
    return (
        <>
            <Pagination/>
            <PokemonList/>
        </>
    )
}
export default MainPage;
