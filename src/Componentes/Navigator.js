import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuDesplegable from './MenuDesplegable';
import './Styles/Navigator.css';
const Navigator=({title})=>{
    const [esIndex, setEsIndex] = useState(false);
    const [esEmployees, setEsEmployees] = useState(false);
    const [esUpload, setEsUpload] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(()=>{
        switch (title) {
            case '/':
                setEsIndex(true);
                break;
            case 'Employees':
                setEsEmployees(true);
                break;
            case 'Upload':
                setEsUpload(true);
                break;
            default:
                break;
        }
    },[]);
    return (
        <header className="Header">
            <button className='botonMenu' onClick={()=>{setOpenMenu(true)}}>
                <img src='./menu.png' alt='Botón Menú'/>
            </button>
            <div className='titulo'>
                <div className='link'>{title}</div>
            </div>
            <div className='secciones' >
                <div title='Ir al inicio' className='el' style={ (esIndex)? {backgroundColor: "rgb(223, 237, 248)"}: {backgroundColor: "rgb(240, 248, 255)"}}>
                    <Link className='link' to={'/'}>Logout</Link>
                </div>
                <div title='Ir a las employees' className='el' style={ (esEmployees)? {backgroundColor: "rgb(223, 237, 248)"}: {backgroundColor: "rgb(240, 248, 255)"}}>
                    <Link className='link' to={'/employees'}>Employees</Link>
                </div>
                <div title='Ir a los upload' className='el' style={ (esUpload)? {backgroundColor: "rgb(223, 237, 248)"}: {backgroundColor: "rgb(240, 248, 255)"}}>
                    <Link className='link' to={'/upload'}>Upload</Link>
                </div>
            </div>
            {openMenu&&
                <MenuDesplegable setOpenMenu={setOpenMenu}/>
            }
        </header>
    )
}
export default Navigator;