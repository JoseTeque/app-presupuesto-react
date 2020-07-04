import React from 'react';
import Gasto from './Gato';
import PropTypes from 'prop-types';

const ListaGastos = ({gastos}) => {
    return ( 
       <div className="gastos-realizados">
            <h2>Listado Realizado</h2>
            {gastos.map(gasto => 
                <Gasto
                  key={gasto.id}
                    gasto={gasto}
                 />
            )}
       </div>
     );
}

ListaGastos.propTypes = {
    gastos: PropTypes.array.isRequired
}
 
export default ListaGastos;