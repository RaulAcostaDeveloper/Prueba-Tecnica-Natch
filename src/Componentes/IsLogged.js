import { useSelector } from 'react-redux';
import { selectLogeado } from "../Redux/Selectores";
import Login from '../Rutas/Login';
const IsLogged =({children})=>{
    const logeado = useSelector(selectLogeado);	
    console.log('is logged ', logeado);
    if (logeado) {
        return children
    } else {
        return (
            <Login/>
        )
    }
}
export default IsLogged;