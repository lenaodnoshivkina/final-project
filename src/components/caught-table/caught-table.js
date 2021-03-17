import React from 'react';
import { connect } from 'react-redux';
import WithPokedoxService from '../hoc';
import { NavLink } from 'react-router-dom';

import './caught-table.scss';

const CaughtTable = ({items}) => {
    if( items.length === 0){
        return (
            <div className="caught">
                <div className="caught__title">Not a single Pokemon has been caught yet :( </div>
            </div>
        )
    }else{
        return (
            <div className="caught">
                <div className="caught__title">Caught Pokemons:</div>
                <div className="caught__list">
                    {
                        items.map( item => {
                            const {id, name} = item;
                            return (
                                <div key = {id} className="caught__item">
                                    <img src={`../../../public/pokemons/${id}.png`} className="caught__item-img" alt={name}></img>
                                    <div className="caught__item-title"><NavLink to={`/card/${id}`}>{name}</NavLink></div>                             
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
};

const mapStateToProps = ({items}) => {
    return{
        items 
    }
};


export default WithPokedoxService()(connect(mapStateToProps)(CaughtTable));