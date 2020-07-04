import React , { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({setpresupuesto, setrestante, setmostrarPregunta}) => {

    //Definir los estados
    const [cantidad, setcantidad] = useState(0);
    const [error, seterror] = useState(false)

    // Obteniendo el valor del input
    const handleChange = e => {
        setcantidad(parseInt(e.target.value))
    }

    //Submit
    const handleSubmit = e => {
        e.preventDefault();

        if(cantidad < 1 || isNaN(cantidad)){

            setTimeout(() => {
                seterror(true);
                setTimeout(() => {
                    seterror(false);
                },3000)
            },50)
          
            return;
        }

        seterror(false);

        setpresupuesto(cantidad);
        setrestante(cantidad);
        setmostrarPregunta(false);
        
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto..</h2>

            {error ? <Error mensaje ="El presupuesto es incorrecto.." /> : null}
            <form 
                onSubmit={handleSubmit}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={handleChange}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"

                />
            </form>
        </Fragment>
     );
}

Pregunta.propTypes = {
    setpresupuesto: PropTypes.func.isRequired,
    setrestante:PropTypes.func.isRequired,
    setmostrarPregunta:PropTypes.func.isRequired
}
 
export default Pregunta;