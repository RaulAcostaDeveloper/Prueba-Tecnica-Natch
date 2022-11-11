import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectCredenciales, selectLogeado } from "../Redux/Selectores";
import '../Componentes/Styles/Login.css';
const Login =()=>{
    const dispatch = useDispatch();
    const credenciales = useSelector(selectCredenciales);	
    const logeado = useSelector(selectLogeado);	

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    useEffect(()=>{
        dispatch({ type: 'logged/false'});
    },[])
    const esUsuario = ()=>{
        if (userName===credenciales.userName && userPassword===credenciales.password) {
            return true;
        } else {
            return false;
        }
    }
    const handleLogin=()=>{
        if (esUsuario()) {
            dispatch({ type: 'logged/true'});
            window.location.href = '#/employees';
        }
    }
    const handlePreventDefault=(e)=>{
        e.preventDefault();
    }
    console.log('is logged ', logeado);

    return (
        <div className="Login">
            <div className="contenedor">
                <input 
                    onPaste={(e)=>handlePreventDefault(e)} 
                    onCopy={(e)=>handlePreventDefault(e)}
                    type={'text'}
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                    placeholder={'UserName'}
                />
                <input 
                    onPaste={(e)=>handlePreventDefault(e)} 
                    onCopy={(e)=>handlePreventDefault(e)}
                    type={'password'}
                    value={userPassword}
                    onChange={(e)=>setUserPassword(e.target.value)}
                    placeholder={'Password'}
                />
                {(userName.length>0&&userPassword.length>0)&&
                    <button onClick={()=>{handleLogin()}}>Login</button>
                }
            </div>
        </div>
    )
}
export default Login;