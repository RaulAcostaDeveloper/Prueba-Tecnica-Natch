import { useEffect, useState } from 'react';
import Navigator from '../Componentes/Navigator';
import TablaEmpleados from '../Componentes/TablaEmpleados';
import Formulario from '../Componentes/Formulario';
import BotonNuevoUsuario from '../Componentes/BotonNuevoUsuario';
import Modal from '../Componentes/Modal';
const Employees =()=>{
    const [mostrarFormAniadir, setMostrarFormAniadir] = useState(false);
    const [mensajeModal, setMensajeModal] = useState('');
    const [mostrarModal, setMostrarModal] = useState(false);

    const [datos, setDatos] = useState();
    const [fetchAgain, setFetchAgain] = useState(false);
    useEffect(()=>{
        const host = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:angel_raul_acosta';
        fetch(`${host}`)
        .then(resp => resp.json())
        .then((data) => {
            setDatos(data.data.employees);
        }).catch(e=>{
            console.log('GET Error');
            console.log(e);
        });
        console.log('fetching');
    },[fetchAgain]);
    const cumpleValidaciones = (data) => {
        // Validaciones
        if (data.nombre.length<=3) {
            setMostrarModal(true);
            setMensajeModal('Escribe el nombre');
            return false;
        }
        if (data.nombre.length>30 ) {
            setMostrarModal(true);
            setMensajeModal('Escribe un nombre mas corto');
            return false;
        }
        if (data.apellidos.length<=3) {
            setMostrarModal(true);
            setMensajeModal('Escribe el apellido');
            return false;
        }
        if (data.apellidos.length>30 ) {
            setMostrarModal(true);
            setMensajeModal('Escribe un apellido mas corto');
            return false;
        }
        console.log(data.cumpleanios);
        if (data.cumpleanios.length<=0) {
            setMostrarModal(true);
            setMensajeModal('Selecciona una fecha de cumpleaños');
            return false;
        }
        // Si cumple todo
        return true;
    }
    const enviarUsuario = (data)=>{
        console.log('Enviando usuario ', data);
        const host = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:angel_raul_acosta';

        fetch(host, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: data.nombre,
                last_name: data.apellidos,
                birthday: data.cumpleanios,
            })
        })
        .then((response) => response.json())
        .then(data => console.log(data))
        setTimeout(() => {
            setFetchAgain(!fetchAgain);
        }, 1000);
    }
    const handleNewElemento = (data)=>{
        if (cumpleValidaciones(data)) {
            enviarUsuario(data);
            setMostrarFormAniadir(false);
        }
    }
    return (
        <div>
            <Navigator title={'Employees'}/>
            <BotonNuevoUsuario setMostrarForm={setMostrarFormAniadir}/>
            {mostrarModal&&
                <Modal mensajeModal={mensajeModal} setMostrarModal={setMostrarModal}/>
            }
            {mostrarFormAniadir&&
                <Formulario mensaje='Añadiendo un usuario' setMostrarForm={setMostrarFormAniadir} handleSend={handleNewElemento}/>
            }
            {datos?
            <TablaEmpleados empleados = {datos}/>
            :
            <div>Loading... <button onClick={()=>setFetchAgain(!fetchAgain)}>Try Again</button></div>
            }
        </div>
    )
}
export default Employees;