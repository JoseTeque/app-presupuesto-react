import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({setGasto, setcrearGastos}) => {

    const [nombreGasto, setnombreGasto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, seterror] = useState(false)

    //Submit
    const agregarGastos = e => {
        e.preventDefault();

        //VALIDAR GASTO
        if(cantidad < 1 || isNaN(cantidad) || nombreGasto.trim() === ''){

            setTimeout(() => {
                seterror(true);
                setTimeout(() => {
                    seterror(false);
                },5000)
            },50)
          
            return;
        }

        //CONSTRUIR EL GASTO
        const gastos = {
            nombre: nombreGasto,
            cantidad:cantidad,
            id: shortid.generate()
        }

        //PASAR EL GASTO AL COMPONENTE PRINCIPAL
        setGasto(gastos);
        setcrearGastos(true);

        //RESETEAR EL GASTO

        setnombreGasto('');
        setCantidad(0);
    }

    return ( 
        <form 
            onSubmit={agregarGastos}
        >
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje = "Ambos casos son Obligatorios o el presupuesto es incorrecto.." />: null }

            <div className="campo">
                <label>Nombre Gasto: </label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombreGasto}
                    onChange= {e => setnombreGasto(e.target.value)}
                />

            </div>

            <div className="campo">
                <label>Cantidad Gasto: </label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad.toString()}
                    onChange= {e => setCantidad(parseInt(e.target.value))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="agregar gastos"
            />
        </form>
     );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setcrearGastos:PropTypes.func.isRequired
}
 
export default Formulario;