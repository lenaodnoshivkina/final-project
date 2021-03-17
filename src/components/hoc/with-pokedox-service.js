import React from 'react';
import PokedoxServiceContext from '../pokedox-service-context';

const WithPokedoxService = () => (Wrapped) => {
    return (props) => {
        return (
            <PokedoxServiceContext.Consumer>
                {
                    (PokedoxService) => {
                        return <Wrapped {...props} PokedoxService={PokedoxService}/>
                    }
                }
            </PokedoxServiceContext.Consumer>
        )
    };
};

export default WithPokedoxService;