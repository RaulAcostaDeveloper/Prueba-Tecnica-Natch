import { useEffect, useState } from "react";
import ElementoEmpleado from "./ElementoEmpleado";
import BuscadorEmpleados from "./BuscadorEmpleados";
import FiltroNumericoEmpleados from "./FiltroNumericoEmpleados";
import './Styles/TablaEmpleados.css';
const TablaEmpleados = ({empleados})=>{
    const [elementos, setElementos] = useState([]);
    const [filtroNombre, setFiltroNombre] = useState('');
    const [filtroNumerico, setFiltroNumerico] = useState(10);

    useEffect(()=>{
        
            let elementosTemp = empleados.map((el)=>el);
            elementosTemp = elementosTemp.filter((el)=> (el.name.toLocaleLowerCase().includes(filtroNombre)&&el.id<=filtroNumerico && el.id>=filtroNumerico-10));
            setElementos(elementosTemp);
     
    },[filtroNombre, filtroNumerico]);
    useEffect(()=>{
        if (filtroNumerico>0) {
            let elementosTemp = empleados.map((el)=>el);
            elementosTemp = elementosTemp.filter((el)=> el.id<=filtroNumerico && el.id>filtroNumerico-10);
            setElementos(elementosTemp);
        } else {
            setElementos(empleados);
        }
    },[filtroNumerico]);
    return (
        <div className="TablaEmpleados">
            <BuscadorEmpleados filtroNombre={filtroNombre} setFiltroNombre={setFiltroNombre}/>
            <FiltroNumericoEmpleados filtroNumerico={filtroNumerico} setFiltroNumerico={setFiltroNumerico}/>

            <div className="HeaderTabla">
                <div>Nombre</div>
                <div>Apellido</div>
                <div>Cumpleaños</div>
            </div>
            {(elementos.length>0)&&
            <>
                {elementos.map( (elemento) => <ElementoEmpleado key={elemento.id} elemento={elemento}/> ) }
            </>
            }
        </div>
    )
}
export default TablaEmpleados;