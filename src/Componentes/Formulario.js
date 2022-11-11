import { useState } from "react";
import './Styles/Formulario.css';
const Formulario = ({setMostrarForm, mensaje, handleSend})=>{
    const [closing, setClosing] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [cumpleanios, setCumpleanios] = useState('');
    const handleClose = ()=>{
        setClosing(true);
        setTimeout(() => {
            setMostrarForm(false)
        }, 300);
    }
    let openAnimationStyle = {
        animationName:"openForm",
        animationDuration:"500ms",
        animationFillMode:"initial",
    };
    let closeAnimationStyle = {
        animationName:"closeForm",
        animationDuration:"500ms",
        animationFillMode:"initial",
    };
    return (
        <div className="formulario">
            <div className="exterior" onClick={()=>{handleClose()}}>
            </div>
            <div className="interior" style={closing? closeAnimationStyle:openAnimationStyle}>
                <p>{mensaje}</p>
                <input placeholder='nombre' type={'text'} value={nombre} onChange={(e)=>setNombre(e.target.value)}/>
                <input placeholder='apellidos' type={'text'} value={apellidos} onChange={(e)=>setApellidos(e.target.value)}/>
                <p>Cumpleaños</p>
                <input type={'date'} value={cumpleanios} onChange={(e)=>setCumpleanios(e.target.value)}/>

                <button onClick={()=>handleSend({nombre, apellidos, cumpleanios})}>AÑADIR</button>
            </div>
        </div>
    )
}
export default Formulario;