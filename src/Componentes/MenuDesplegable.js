import { useState, useEffect } from 'react';
import './Styles/MenuDesplegable.css';
import { Link } from 'react-router-dom';

const MenuDesplegable =({setOpenMenu})=>{
    const [esIndex, setEsIndex] = useState(false);
    const [esEmployees, setEsEmployees] = useState(false);
    const [esUpload, setEsUpload] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(()=>{
        switch (window.location.pathname) {
            case '/':
                setEsIndex(true);
                break;
            case '/employees':
                setEsEmployees(true);
                break;
            case '/upload':
                setEsUpload(true);
                break;
            default:
                break;
        }
    },[])
    const handleClose = ()=>{
        setClosing(true);
        setTimeout(() => {
            setOpenMenu(false)
        }, 300);
    }
    // La animación está en MenuDesplegable.css
    let openAnimationStyle = {
        animationName:"openMenu",
        animationDuration:"500ms",
        animationFillMode:"initial",
    };
    let closeAnimationStyle = {
        animationName:"closeMenu",
        animationDuration:"500ms",
        animationFillMode:"initial",
    };
    return (
        <div className='MenuDesplegable' onClick={()=>{handleClose()}}>
            <div className='exterior'>
            </div>
            <div className='interior' style={closing? closeAnimationStyle:openAnimationStyle}>
                <div className='header'>
                    <span className='title'>Prueba técnica Natch</span>
                    <span className='subtitle'>Desarrollada por Raúl Acosta</span>
                </div>
                <div className='enlaces' >
                    <div title='Ir al inicio' className='el' style={ (esIndex)? {backgroundColor: "rgb(221, 232, 241)"}: {backgroundColor: "rgb(240, 248, 255)"}}>
                        <Link className='link' to={'/'}>Logout</Link>
                    </div>
                    <div title='Ir a las employees' className='el' style={ (esEmployees)? {backgroundColor: "rgb(221, 232, 241)"}: {backgroundColor: "rgb(240, 248, 255)"}}>
                        <Link className='link' to={'/employees'}>Employees</Link>
                    </div>
                    <div title='Ir a los upload' className='el' style={ (esUpload)? {backgroundColor: "rgb(221, 232, 241)"}: {backgroundColor: "rgb(240, 248, 255)"}}>
                        <Link className='link' to={'/upload'}>Upload</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuDesplegable;