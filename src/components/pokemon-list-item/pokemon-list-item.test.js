import React from 'react';
import PokemonListItem from './pokemon-list-item';
import renderer from 'react-test-renderer'

describe('Testing <PokemonListItem>', () => {
    it('PokemonListItem have rendered correctly', () => {
        const char = renderer.create(<PokemonListItem/>).toJSON();
        expect(char).toMatchSnapshot();
    })
})