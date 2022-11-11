import './Styles/BotonNuevoUsuario.css';
const BotonNuevoUsuario = ({setMostrarForm})=>{
    return (
        <div className='BotonNuevoUsuario'>
            <button onClick={()=>setMostrarForm(true)}>Nuevo Usuario</button>
        </div>
    )
}
export default BotonNuevoUsuario;