import React , {useState, useEffect}from 'react';
import Pregunta from './componentes/Pregunta'
import Formulario from './componentes/Formulario'
import ListaGastos from './componentes/ListaGastos'
import ControlPresupuesto from './componentes/ControlPresupuesto'


function App() {

  //DEFINIR LOS ESTADOS
  const [presupuesto, setpresupuesto] = useState(0);
  const [restante, setrestante] = useState(0);
  const [mostrarPregunta, setmostrarPregunta] = useState(true);
  const [gastos, setgastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGastos, setcrearGastos] = useState(false);


  useEffect(() => {
    if(crearGastos){
      //Agregar el nuevo presupuesto
      setgastos([
        ...gastos,
        gasto
      ])

      //resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setrestante(presupuestoRestante);

      setcrearGastos(false);
    }
  }, [gasto, crearGastos,gastos, restante])


  return (
    <div className="container">
      <header>
        <h1>Gastos Semanal</h1>
        <div className="contenido-principal contenido">

          {mostrarPregunta ? 
            (
              <Pregunta
            setpresupuesto = {setpresupuesto}
            setrestante = {setrestante}
            setmostrarPregunta = {setmostrarPregunta}
          />
            )
          :
          (
            <div className="row">
            <div className="one-half column">
              <Formulario
               setGasto = {setGasto}
               setcrearGastos={setcrearGastos}
               />
            </div>
             <div className="one-half column">
               <ListaGastos
                 gastos = {gastos}
               />

               <ControlPresupuesto
                  presupuesto = {presupuesto}
                  restante = {restante}
               />
            </div>
          </div>
          )
          }
         
        </div>
      </header>
  
    </div>
  );
}

export default App;
