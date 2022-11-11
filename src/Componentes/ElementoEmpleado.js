import './Styles/ElementoEmpleado.css';
const ElementoEmpleado = ({elemento})=>{
    return (
        <div className="ElementoEmpleado">
            <div>{elemento.name}</div>
            <div>{elemento.last_name}</div>
            <div>{elemento.birthday}</div>
        </div>
    )
}
export default ElementoEmpleado;