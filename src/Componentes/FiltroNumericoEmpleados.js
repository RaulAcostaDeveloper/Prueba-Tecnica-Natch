import { useEffect, useState } from 'react';
import './Styles/BuscadorEmpleados.css';

const FiltroNumericoEmpleados = ({numElementos, filtroNumerico, setFiltroNumerico})=>{
    const [insideSelect, setInsideSelect] = useState('');
    useEffect(()=>{
        let cantidadElementos = Math.ceil(numElementos/10); //Número de décimos (paginación)
        let opcionHtml='';
        let opcionesHtml = [];
        for (let index = 1; index < cantidadElementos + 1; index++) {
            let sup = index*10;
            let inf = sup-10;
            opcionHtml = ()=>{
                return (
                    <option value={sup}>{inf}-{sup}</option>
                )
            }
            opcionesHtml = opcionesHtml.concat(opcionHtml());
        }
        setInsideSelect(opcionesHtml);
    },[numElementos]);
    return (
        <div className="BuscadorEmpleados"> 
            <p>Paginación</p>
            <select value={filtroNumerico} onChange={(e)=>setFiltroNumerico(e.target.value)} >
                {insideSelect}
            </select>
        </div>
    )
}
export default FiltroNumericoEmpleados;