import './Styles/BuscadorEmpleados.css';
const BuscadorEmpleados = ({filtroNombre, setFiltroNombre})=>{
    return (
        <div className="BuscadorEmpleados">
            <p>Filtro por nombre</p>
            <input 
                type={'text'} 
                placeholder={'escribe aquí'}
                value={filtroNombre}
                onChange={(e)=>setFiltroNombre(e.target.value)}
            />
        </div>
    )
}
export default BuscadorEmpleados;