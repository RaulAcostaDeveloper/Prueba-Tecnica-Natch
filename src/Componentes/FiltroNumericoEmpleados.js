import './Styles/BuscadorEmpleados.css';

const FiltroNumericoEmpleados = ({filtroNumerico, setFiltroNumerico})=>{
    return (
        <div className="BuscadorEmpleados"> 
            <p>Paginación</p>
            <select value={filtroNumerico} onChange={(e)=>setFiltroNumerico(e.target.value)} >
                <option value={10}>0-10</option>
                <option value={20}>10-20</option>
                <option value={30}>20-30</option>
                <option value={40}>30-40</option>
                <option value={50}>40-50</option>
                <option value={60}>50-60</option>
                <option value={70}>60-70</option>
                <option value={80}>70-80</option>

            </select>
        </div>
    )
}
export default FiltroNumericoEmpleados;